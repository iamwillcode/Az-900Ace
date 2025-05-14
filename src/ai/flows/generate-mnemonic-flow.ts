
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
  mnemonicText: z.string().describe('A short, memorable textual mnemonic for the provided context.'),
  imagePrompt: z.string().describe('A concise DALL-E or image generation model-friendly prompt based on the mnemonic text. Should be descriptive and visual.'),
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
    You are an expert learning assistant. Your task is to help users remember complex topics by creating visual mnemonics.
    Given the following context (topic name and study guide content):
    Context: {{{context}}}

    Please generate:
    1.  **mnemonicText**: A short, clever, and memorable textual description of a visual mnemonic that encapsulates the key ideas from the context. Make it easy to visualize.
    2.  **imagePrompt**: A concise but descriptive prompt, suitable for an AI image generation model (like DALL-E or Gemini), that visually represents the mnemonicText. Focus on concrete objects, scenes, and simple actions. Avoid abstract concepts in the image prompt if possible; translate them into visual elements. Aim for a simple, clear image. For example, instead of "symbolizes scalability", try "a small plant quickly growing into a large tree".

    Ensure the mnemonicText and imagePrompt are distinct but closely related. The imagePrompt should be a direct visual interpretation of the mnemonicText.
    
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
    return output;
  }
);

