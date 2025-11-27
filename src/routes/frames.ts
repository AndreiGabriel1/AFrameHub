import { Router } from "express";
import type { Frame, ApiResponse } from "../types/frame";
import { generateSlug } from "../utils/slug";

const framesRouter = Router();

// In-memory mock data — entry-mid demo
let frames: Frame[] = [
  {
    id: "f1",
    title: "Cabana A-frame demo 1",
    info: "Casă A-frame cu vedere la munte, 2 dormitoare, terasă mare.",
    slug: generateSlug("Cabana A-frame demo 1"),
    image: "/gallery/Aframe1.JPEG",
  },
  {
    id: "f2",
    title: "Cabana A-frame demo 2",
    info: "Casă A-frame compactă, ideală pentru cupluri, aproape de pădure.",
    slug: generateSlug("Cabana A-frame demo 2"),
    image: "/gallery/Aframe2.JPEG",
  },
];

// GET /api/frames – listă toate casele
framesRouter.get("/", (_req, res) => {
  const response: ApiResponse<Frame[]> = {
    ok: true,
    data: frames,
  };
  res.json(response);
});

// GET /api/frames/:slug – detalii pentru o casă după slug
framesRouter.get("/:slug", (req, res) => {
  const slug = String(req.params.slug);
  const frame = frames.find((f) => f.slug === slug) ?? null;

  if (!frame) {
    const response: ApiResponse<null> = {
      ok: false,
      data: null,
    };
    return res.status(404).json(response);
  }

  const response: ApiResponse<Frame> = {
    ok: true,
    data: frame,
  };

  return res.json(response);
});

// POST /api/frames – adaugă o casă nouă
framesRouter.post("/", (req, res) => {
  const { title, info } = req.body ?? {};

  if (typeof title !== "string" || typeof info !== "string") {
    const response: ApiResponse<null> = {
      ok: false,
      data: null,
    };
    return res.status(400).json(response);
  }

  const newFrame: Frame = {
    id: `f${Date.now()}`,
    title,
    info,
    slug: generateSlug(title),
  };

  frames = [newFrame, ...frames];

  const response: ApiResponse<Frame> = {
    ok: true,
    data: newFrame,
  };

  return res.status(201).json(response);
});

// DELETE /api/frames/:slug – șterge o casă
framesRouter.delete("/:slug", (req, res) => {
  const slug = String(req.params.slug);
  const exists = frames.some((f) => f.slug === slug);

  if (!exists) {
    const response: ApiResponse<null> = {
      ok: false,
      data: null,
    };
    return res.status(404).json(response);
  }

  frames = frames.filter((f) => f.slug !== slug);

  const response: ApiResponse<null> = {
    ok: true,
    data: null,
  };

  return res.json(response);
});

export default framesRouter;
