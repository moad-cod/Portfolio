"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useRef } from "react";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from "@/components/ui/icons";

type ImageLightboxProps = {
  activeIndex: number | null;
  caption?: string;
  images: string[];
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

const ease = [0.22, 1, 0.36, 1] as const;

export function ImageLightbox({
  activeIndex,
  caption,
  images,
  onClose,
  onIndexChange,
}: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isOpen = activeIndex !== null;
  const selectedIndex = activeIndex ?? 0;
  const selectedImage = images[selectedIndex];
  const hasMultipleImages = images.length > 1;

  const showPrevious = useCallback(() => {
    onIndexChange((selectedIndex - 1 + images.length) % images.length);
  }, [images.length, onIndexChange, selectedIndex]);

  const showNext = useCallback(() => {
    onIndexChange((selectedIndex + 1) % images.length);
  }, [images.length, onIndexChange, selectedIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLButtonElement>("button")?.focus();
    function trapFocus(event: KeyboardEvent) {
      if (event.key !== "Tab" || !dialog) return;
      const buttons = Array.from(dialog.querySelectorAll<HTMLButtonElement>("button"));
      const first = buttons[0];
      const last = buttons[buttons.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
    document.addEventListener("keydown", trapFocus);
    return () => {
      document.removeEventListener("keydown", trapFocus);
      previousFocus?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft" && hasMultipleImages) {
        showPrevious();
      }

      if (event.key === "ArrowRight" && hasMultipleImages) {
        showNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasMultipleImages, isOpen, onClose, showNext, showPrevious]);

  if (!isOpen) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && selectedImage ? (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={caption ?? "Project image gallery"}
          data-lenis-prevent
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={onClose}
          transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease }}
        >
          <div className="absolute right-4 top-4 z-10 flex items-center gap-3">
            <span className="rounded-full border border-border bg-surface/90 px-3 py-2 text-sm font-medium text-muted">
              {selectedIndex + 1} / {images.length}
            </span>
            <button
              aria-label="Close image gallery"
              className="icon-button bg-surface/90"
              onClick={onClose}
              type="button"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>

          {hasMultipleImages ? (
            <button
              aria-label="Previous image"
              className="lightbox-nav left-4 md:left-8"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              type="button"
            >
              <ChevronLeftIcon className="size-6" />
            </button>
          ) : null}

          <motion.figure
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            className="w-full max-w-6xl"
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            onClick={(event) => event.stopPropagation()}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease }}
          >
            <div className="relative aspect-[1917/990] max-h-[78vh] overflow-hidden rounded-2xl border border-amber/40 bg-surface shadow-amber">
              <AnimatePresence mode="wait">
                <motion.div
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0"
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.015 }}
                  key={selectedImage}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease }}
                >
                  <Image
                    alt={`${caption ?? "Project screenshot"} ${selectedIndex + 1}`}
                    className="object-contain"
                    fill
                    priority
                    sizes="100vw"
                    src={selectedImage}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            {caption ? (
              <figcaption className="mt-4 text-center text-sm text-muted">
                {caption}
              </figcaption>
            ) : null}
          </motion.figure>

          {hasMultipleImages ? (
            <button
              aria-label="Next image"
              className="lightbox-nav right-4 md:right-8"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              type="button"
            >
              <ChevronRightIcon className="size-6" />
            </button>
          ) : null}
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
