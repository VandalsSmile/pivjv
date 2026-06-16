"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import {
  Upload,
  Loader2,
  Trash2,
  ImageIcon,
  Check,
  AlertCircle,
} from "lucide-react";

type GalleryImage = {
  url: string;
  pathname: string;
  uploadedAt: string;
};

export function UploadManager() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [deletingUrl, setDeletingUrl] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const loadImages = useCallback(async () => {
    try {
      const res = await fetch("/api/list", { cache: "no-store" });
      const data = await res.json();
      if (res.ok) {
        setImages(data.files || []);
      } else {
        setError(data.error || "Failed to load images.");
      }
    } catch {
      setError("Failed to load images.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadImages();
  }, [loadImages]);

  const uploadFiles = useCallback(
    async (files: FileList | File[]) => {
      const fileArray = Array.from(files).filter((f) =>
        f.type.startsWith("image/"),
      );
      if (fileArray.length === 0) {
        setError("Please choose image files only.");
        return;
      }

      setIsUploading(true);
      setError("");
      setSuccess("");

      try {
        for (const file of fileArray) {
          const formData = new FormData();
          formData.append("file", file);
          const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
          });
          if (!res.ok) {
            const data = await res.json().catch(() => ({}));
            throw new Error(data.error || "Upload failed.");
          }
        }
        setSuccess(
          `${fileArray.length} image${fileArray.length > 1 ? "s" : ""} uploaded successfully.`,
        );
        await loadImages();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Upload failed.");
      } finally {
        setIsUploading(false);
      }
    },
    [loadImages],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      if (e.dataTransfer.files?.length) {
        uploadFiles(e.dataTransfer.files);
      }
    },
    [uploadFiles],
  );

  const handleDelete = async (url: string) => {
    setDeletingUrl(url);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/api/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Delete failed.");
      }
      setImages((prev) => prev.filter((img) => img.url !== url));
      setSuccess("Image deleted.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Delete failed.");
    } finally {
      setDeletingUrl("");
    }
  };

  return (
    <div className="space-y-8">
      {/* Drop zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
        }}
        className={`flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed p-10 text-center cursor-pointer transition-colors ${
          isDragging
            ? "border-secondary bg-background-alt"
            : "border-border-dark bg-white hover:border-secondary hover:bg-background-alt"
        }`}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
          {isUploading ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            <Upload className="h-6 w-6" />
          )}
        </div>
        <p className="font-semibold text-foreground">
          {isUploading ? "Uploading…" : "Drag & drop images here"}
        </p>
        <p className="text-sm text-foreground-muted">
          or click to browse. JPG, PNG, WebP supported.
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            if (e.target.files?.length) uploadFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </div>

      {/* Status messages */}
      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-error/10 px-4 py-3 text-sm text-error">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          {error}
        </div>
      )}
      {success && (
        <div className="flex items-center gap-2 rounded-lg bg-success/10 px-4 py-3 text-sm text-success">
          <Check className="h-4 w-4 flex-shrink-0" />
          {success}
        </div>
      )}

      {/* Existing images */}
      <div>
        <div className="mb-4 flex items-center gap-2">
          <ImageIcon className="h-5 w-5 text-secondary" />
          <h2 className="text-xl font-bold">
            Current Gallery Images
            {!isLoading && (
              <span className="ml-2 text-sm font-normal text-foreground-muted">
                ({images.length})
              </span>
            )}
          </h2>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12 text-foreground-muted">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        ) : images.length === 0 ? (
          <p className="rounded-lg bg-background-alt px-4 py-8 text-center text-foreground-muted">
            No images uploaded yet. Upload your first image above.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {images.map((img) => (
              <figure
                key={img.url}
                className="group relative aspect-square overflow-hidden rounded-xl border border-border shadow-sm"
              >
                <Image
                  src={img.url || "/placeholder.svg"}
                  alt={img.pathname.split("/").pop() || "Gallery image"}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => handleDelete(img.url)}
                  disabled={deletingUrl === img.url}
                  aria-label="Delete image"
                  className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-error shadow-md transition-colors hover:bg-error hover:text-white disabled:opacity-70"
                >
                  {deletingUrl === img.url ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Trash2 className="h-4 w-4" />
                  )}
                </button>
              </figure>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
