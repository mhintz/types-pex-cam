declare module "pex-cam";

import { mat4, vec3 } from "gl-matrix";

export class PexCamera {
  // properties
  projectionMatrix: mat4;
  invViewMatrix: mat4;
  viewMatrix: mat4;
  position: vec3 | number[];
  target: vec3 | number[];
  up: vec3 | number[];
  fov: number;
  aspect: number;
  near: number;
  far: number;

  // methods
  set(opts: PexCameraOpts): void;
  getViewRay(
    x: number,
    y: number,
    windowWidth: number,
    windowHeight: number
  ): [vec3, vec3];
  getWorldRay(
    x: number,
    y: number,
    windowWidth: number,
    windowHeight: number
  ): [vec3, vec3];
}

export interface PexCameraOpts {
  position?: vec3 | number[];
  target?: vec3 | number[];
  up?: vec3 | number[];
  fov?: number;
  aspect?: number;
  near?: number;
  far?: number;
}

// the create function takes an object with the same props as the resulting class
export function perspective(opts: PexCameraOpts): PexCamera;

export class PexOrbiter {
  // properties
  camera: PexCamera;
  easing: number;
  element: HTMLElement | Window;
  width: number;
  height: number;
  minDistance: number;
  maxDistance: number;
  zoomSlowdown: number;
  zoom: boolean;
  pan: boolean;
  drag: boolean;
  dragSlowdown: number;
  autoUpdate: boolean;

  // methods
  updateWindowSize(): void;
  updateCamera(): void;
  dispose(): void;
}

export interface PexOrbiterOpts {
  camera: PexCamera;
  easing?: number;
  element?: HTMLElement | Window;
  width?: number;
  height?: number;
  minDistance?: number;
  maxDistance?: number;
  zoomSlowdown?: number;
  zoom?: boolean;
  pan?: boolean;
  drag?: boolean;
  dragSlowdown?: number;
  autoUpdate?: boolean;
}

// the create function takes an object with the same props as the resulting class
export function orbiter(opts: PexOrbiterOpts): PexOrbiter;
