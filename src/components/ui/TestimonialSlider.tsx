"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const testimonial = TESTIMONIALS[current];

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-border relative">
        <Quote className="w-10 h-10 text-accent mb-6" />
        <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 min-h-[120px] transition-opacity duration-500">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <div>
          <p className="font-semibold text-secondary">{testimonial.name}</p>
          <p className="text-sm text-muted">{testimonial.role}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          type="button"
          onClick={prev}
          className="p-2 rounded-full border border-border hover:bg-accent-light transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === current ? "bg-primary" : "bg-border"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          className="p-2 rounded-full border border-border hover:bg-accent-light transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
