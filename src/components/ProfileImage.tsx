import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { profile } from "@/content/profile";

// Shows public/profile.jpg when present, otherwise falls back to initials.
export function ProfileImage() {
  const exists = fs.existsSync(path.join(process.cwd(), "public", profile.image));
  const { x, y } = profile.imageFocus;
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="relative size-32 shrink-0 overflow-hidden rounded-full border border-panel-border bg-black">
      {exists ? (
        <Image
          src={profile.image}
          alt={profile.name}
          fill
          sizes={`${128 * profile.imageZoom}px`}
          className="object-cover"
          style={{
            objectPosition: `${x}% ${y}%`,
            transform: `scale(${profile.imageZoom}) translate(${50 - x}%, ${50 - y}%)`,
          }}
          priority
        />
      ) : (
        <span className="flex size-full items-center justify-center text-3xl font-semibold text-muted">
          {initials}
        </span>
      )}
    </div>
  );
}
