import type { PluginListenerHandle } from '@capacitor/core';

export interface FilePickerPlugin {
  /**
   * Open the file picker that allows the user to select one or more files.
   * Android only.
   */
  pickFiles(options?: PickFilesOptions): Promise<PickFilesResult>;
  
  /**
   * Pick one or more images from the gallery.
   * Android only.
   */
  pickImages(options?: PickImagesOptions): Promise<PickImagesResult>;
  
  /**
   * Pick one or more images or videos from the gallery.
   * Android only.
   */
  pickMedia(options?: PickMediaOptions): Promise<PickMediaResult>;
  
  /**
   * Pick one or more videos from the gallery.
   * Android only.
   */
  pickVideos(options?: PickVideosOptions): Promise<PickVideosResult>;
}

export interface PickFilesOptions {
  types?: string[];
  multiple?: boolean;
  readData?: boolean;
}

export interface PickFilesResult {
  files: PickedFile[];
}

export interface PickedFile {
  blob?: Blob;
  data?: string;
  duration?: number;
  height?: number;
  mimeType: string;
  modifiedAt?: number;
  name: string;
  path?: string;
  size: number;
  width?: number;
}

export interface PickMediaOptions {
  multiple?: boolean;
  readData?: boolean;
}

export interface PickMediaResult {
  files: PickedFile[];
}

export interface PickImagesOptions {
  multiple?: boolean;
  readData?: boolean;
}

export interface PickImagesResult {
  files: PickedFile[];
}

export interface PickVideosOptions {
  multiple?: boolean;
  readData?: boolean;
}

export interface PickVideosResult {
  files: PickedFile[];
} 