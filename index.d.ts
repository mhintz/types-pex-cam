declare module "pex-cam";

import { mat4, vec3 } from "gl-matrix";

export interface PexCamera {
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
}

// the create function takes an object with the same props as the resulting class
export function perspective(opts: {
  position?: vec3 | number[];
  target?: vec3 | number[];
  up?: vec3 | number[];
  fov?: number;
  aspect?: number;
  near?: number;
  far?: number;
}): PexCamera;

export interface PexOrbiter {
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
}

// the create function takes an object with the same props as the resulting class
export function orbiter(opts: {
  camera?: PexCamera;
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
}): PexOrbiter;
