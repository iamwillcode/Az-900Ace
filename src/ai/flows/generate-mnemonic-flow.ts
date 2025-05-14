
'use server';
/**
 * @fileOverview Flow to generate a textual mnemonic and an image prompt.
 *
 * - generateMnemonic - A function that creates a mnemonic text and an image prompt.
 * - GenerateMnemonicInput - The input type for the generateMnemonic function.
 * - GenerateMnemonicOutput - The return type for the generateMnemonic function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateMnemonicInputSchema = z.object({
  context: z.string().describe('The topic name and study guide content for which to generate a mnemonic.'),
});
export type GenerateMnemonicInput = z.infer<typeof GenerateMnemonicInputSchema>;

const GenerateMnemonicOutputSchema = z.object({
  mnemonicText: z
    .string()
    .describe(
      'A hierarchical, emoji-rich, tree-like textual mnemonic for the provided context. See examples for formatting.'
    ),
  imagePrompt: z
    .string()
    .describe(
      'A concise DALL-E or image generation model-friendly prompt based on the overall theme or a key visual aspect of the mnemonicText. Should be descriptive and visual.'
    ),
});
export type GenerateMnemonicOutput = z.infer<typeof GenerateMnemonicOutputSchema>;

// Exported wrapper function
export async function generateMnemonic(input: GenerateMnemonicInput): Promise<GenerateMnemonicOutput> {
  return mnemonicGenerationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMnemonicPrompt',
  input: { schema: GenerateMnemonicInputSchema },
  output: { schema: GenerateMnemonicOutputSchema },
  prompt: `
    You are an expert learning assistant. Your task is to help users remember complex topics by creating visual and structured textual mnemonics.
    Given the following context (topic name and study guide content):
    Context: {{{context}}}

    Please generate:
    1.  **mnemonicText**: A hierarchical, emoji-rich, tree-like textual mnemonic that breaks down the key concepts from the context.
        It should use emojis relevant to the concepts and a clear structure with indentation and connecting lines (e.g., ├──, └──, │).
        The goal is to make complex information easy to scan and understand.

        Follow these examples for the **mnemonicText** format:

        *Example 1: Azure Storage*
        Azure Storage
        ├── 🧱 Blobs (Objects) → Tiers: Hot/Cool/Archive
        ├── 📁 Files (SMB/NFS) → Hybrid sync
        ├── 📬 Queues (Messages) → Async processing
        ├── 💾 Disks (VM Storage) → Managed/Unmanaged
        └── 📈 Tables (NoSQL) → Schemaless

        *Example 2: Azure Blob Storage*
        Azure Blob Storage
        ├── 📂 Unstructured (any file type)
        ├── 🌍 Global HTTP/S access
        ├── ❄️ Tiers: Hot → Cool → Cold → Archive
        └── 🔄 Supports append (logs) & block (files)

        *Example 3: Azure Data Migration*
        🚚 Azure Data Migration
        ├── 🛫 "Fly Online" (Azure Migrate)
        │   ├── 🖥️ VM Migration (Server Migration)
        │   ├── 🗃️ DB Shift (Database Migration Service)
        │   └── 🌐 App Lift (App Service Migration)
        └── 📦 "Ship Offline" (Data Box Family)
            ├── 💽 Data Box (Suitcase) → 80TB
            ├── 📀 Data Box Disk (DVD) → 8TB
            └── 🚛 Data Box Heavy (Truck) → 1PB

    2.  **imagePrompt**: A concise but descriptive prompt, suitable for an AI image generation model (like DALL-E or Gemini), that visually represents the *overall theme or a key visual metaphor* from the mnemonicText or context. Focus on concrete objects, scenes, and simple actions. Avoid abstract concepts in the image prompt if possible; translate them into visual elements. Aim for a simple, clear image. For example, instead of "symbolizes scalability", try "a small plant quickly growing into a large tree". The image prompt should be a single descriptive sentence.

    Ensure the mnemonicText and imagePrompt are distinct. The imagePrompt should not try to replicate the tree structure of the mnemonicText, but rather capture a core visual idea.
    
    Output MUST be in the specified JSON format.
  `,
});

const mnemonicGenerationFlow = ai.defineFlow(
  {
    name: 'mnemonicGenerationFlow',
    inputSchema: GenerateMnemonicInputSchema,
    outputSchema: GenerateMnemonicOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate mnemonic. The model did not return valid output.');
    }
    // Ensure the generated mnemonicText is treated as pre-formatted text.
    // In many UIs, this would mean wrapping it in <pre> tags or applying CSS `white-space: pre-wrap;`
    // The output schema already defines it as a string, so the UI component will handle rendering.
    return output;
  }
);

