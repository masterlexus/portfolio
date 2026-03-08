import asaTechRaw from './asa-tech.md?raw';
import supportAssistantRaw from './support-assistant.md?raw';
import underwaterSceneRaw from './underwater-scene.md?raw';
import kvStoreRaw from './kv-store.md?raw';
import medicalImagingRaw from './medical-imaging.md?raw';
import chacunRaw from './chacun.md?raw';
import climatewiseRaw from './climatewise.md?raw';
import neuralRlhfRaw from './neural-rlhf.md?raw';

const rawProjects: Record<string, string> = {
  'asa-tech': asaTechRaw,
  'support-assistant': supportAssistantRaw,
  'underwater-scene': underwaterSceneRaw,
  'kv-store': kvStoreRaw,
  'medical-imaging': medicalImagingRaw,
  chacun: chacunRaw,
  climatewise: climatewiseRaw,
  'neural-rlhf': neuralRlhfRaw,
};

export function getRawProject(id: string): string | undefined {
  return rawProjects[id];
}

export function hasProjectPage(id: string): boolean {
  return id in rawProjects;
}
