'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides: { id: string; title: string; content: React.ReactNode }[] = [
  {
    id: 'title',
    title: 'The Evolution of Artificial Intelligence',
    content: (
      <>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed">
          From early symbolic systems to today’s agentic AI — a concise history, key
          breakthroughs, and a plain-language explanation of large language models.
        </p>
        <p className="mt-6 text-sm opacity-80">By: Ali Bariz</p>
      </>
    ),
  },
  {
    id: 'definition',
    title: 'What is Artificial Intelligence?',
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2 text-lg leading-relaxed">
          <li><strong>Definition:</strong> Simulation of human intelligence by machines.</li>
          <li><strong>Main branches:</strong> Machine Learning, NLP, Robotics, Vision, Expert Systems.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'foundations',
    title: 'Early Foundations (1940s–1950s)',
    content: (
      <>
        <p className="text-lg leading-relaxed">Key moments:</p>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li><strong>1943</strong> — McCulloch & Pitts: artificial neuron model.</li>
          <li><strong>1950</strong> — Alan Turing suggested the Turing Test to check machine intelligence.</li>
          <li><strong>1956</strong> — The term “Artificial Intelligence” was created at the Dartmouth Conference.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'symbolic',
    title: 'Symbolic AI (1950s–1970s)',
    content: (
      <>
        <p className="text-lg leading-relaxed">Rule-based approaches and logical reasoning:</p>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Logic Theorist, ELIZA — early demonstration systems.</li>
          <li>Limitation: brittle, no real-world uncertainty handling.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ai-winter',
    title: 'The AI Winter (1970s–1980s)',
    content: (
      <>
        <p className="text-lg leading-relaxed">Overpromises + limited hardware = reduced funding and slower progress, while foundations for later ML research matured.</p>
      </>
    ),
  },
  {
    id: 'ml-rise',
    title: 'Rise of Machine Learning (1980s–1990s)',
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li><strong>Backpropagation</strong> (1986) enabled neural nets to learn from errors.</li>
          <li>Other models: SVMs, decision trees — data-driven approaches took over.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'deep',
    title: 'Deep Learning Revolution (2010s)',
    content: (
      <>
        <p className="text-lg leading-relaxed">Why: more data, GPUs, larger networks.</p>
        <p className="mt-3">Milestone: <strong>2012 — AlexNet</strong> beats competitors on ImageNet — deep learning mainstream.</p>
      </>
    ),
  },
  {
    id: 'llm-birth',
    title: 'Birth of Large Language Models (LLMs)',
    content: (
      <>
        <p className="text-lg leading-relaxed">Neural networks trained on massive text corpora to model language and generate human-like text.</p>
        <p className="mt-3 text-sm opacity-80">Examples: GPT family, BERT, LLaMA, Claude, Gemini.</p>
      </>
    ),
  },
  {
    id: 'how-llms-work',
    title: 'How LLMs Work — Simplified',
    content: (
      <>
        <ol className="list-decimal pl-6 space-y-3 text-lg">
          <li><strong>Data collection:</strong> web text, books, code.</li>
          <li><strong>Tokenization:</strong> turns text into tokens (subwords).</li>
          <li><strong>Transformer architecture:</strong> attention lets models learn long-range patterns.</li>
          <li><strong>Training objective:</strong> next-token prediction across billions of examples.</li>
          <li><strong>Fine-tuning & RLHF:</strong> adapt model behaviour to be useful and safe.</li>
        </ol>
      </>
    ),
  },
  {
    id: 'breakthroughs',
    title: 'Major Breakthroughs for Modern LLMs',
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li><strong>2017</strong> — Transformer paper (Attention is All You Need).</li>
          <li><strong>Transfer learning:</strong> pretrain then fine-tune across tasks (BERT, GPT).</li>
          <li><strong>Scaling laws:</strong> performance improves predictably with more params/data/compute.</li>
          <li><strong>RLHF:</strong> aligns models with human preferences.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'agentic',
    title: 'Agentic AI (2024–Present)',
    content: (
      <>
        <p className="text-lg leading-relaxed">Agentic systems: reason, plan, use tools, and act to achieve goals autonomously.</p>
        <p className="mt-3">Features: memory, multi-step planning, tool use, and goal-driven orchestration.</p>
      </>
    ),
  },
  {
    id: 'timeline',
    title: 'Key Milestones',
    content: (
      <table className="w-full text-left text-sm mt-4">
        <thead>
          <tr className="text-xs uppercase text-gray-400">
            <th className="py-2">Year</th>
            <th className="py-2">Milestone</th>
            <th className="py-2">Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-gray-800">
            <td className="py-2">1950</td>
            <td className="py-2">Turing Test</td>
            <td className="py-2">Defines early concept of machine intelligence</td>
          </tr>
          <tr className="border-t border-gray-800">
            <td className="py-2">1956</td>
            <td className="py-2">Dartmouth Conference</td>
            <td className="py-2">Field of AI is born</td>
          </tr>
          <tr className="border-t border-gray-800">
            <td className="py-2">1986</td>
            <td className="py-2">Backpropagation</td>
            <td className="py-2">Enables training of multi-layer neural nets</td>
          </tr>
          <tr className="border-t border-gray-800">
            <td className="py-2">2012</td>
            <td className="py-2">AlexNet</td>
            <td className="py-2">Start of deep learning era</td>
          </tr>
          <tr className="border-t border-gray-800">
            <td className="py-2">2017</td>
            <td className="py-2">Transformer</td>
            <td className="py-2">Foundation of modern LLMs</td>
          </tr>
          <tr className="border-t border-gray-800">
            <td className="py-2">2022+</td>
            <td className="py-2">ChatGPT and LLMs scale</td>
            <td className="py-2">LLMs become mainstream conversational agents</td>
          </tr>
        </tbody>
      </table>
    ),
  },
  {
    id: 'paradigm',
    title: 'Paradigm Shifts',
    content: (
      <>
        <ul className="list-disc pl-6 space-y-2 text-lg">
          <li>Symbolic → Statistical (rules → data).</li>
          <li>Narrow, task-specific → General-purpose models.</li>
          <li>Reactive systems → Agentic, goal-driven systems.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'future',
    title: 'Future Trends',
    content: (
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>Multi-modal models (text, image, audio, video).</li>
        <li>Safer, aligned agentic systems.</li>
        <li>Human-AI collaboration and tooling.</li>
      </ul>
    ),
  },
  {
    id: 'conclusion',
    title: 'Conclusion',
    content: (
      <p className="text-lg leading-relaxed">AI has progressed in waves. Each wave built on the last: symbolic logic, statistical learning, deep neural nets, and now agentic systems that can plan and act.</p>
    ),
  },
  {
    id: 'references',
    title: 'References & Further Reading',
    content: (
      <ul className="list-disc pl-6 space-y-2 text-lg">
        <li>Alan Turing — "Computing Machinery and Intelligence" (1950)</li>
        <li>Vaswani et al. — "Attention is All You Need" (2017)</li>
        <li>OpenAI blog and research on GPT & agents</li>
        <li>Stanford AI Timeline & MIT Technology Review</li>
      </ul>
    ),
  },
]

export default function SlideSite() {
  const [index, setIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handler = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 5) return
      if (e.deltaY > 0) goNext()
      else goPrev()
    }
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') goNext()
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') goPrev()
      if (e.key === 'Home') setIndex(0)
      if (e.key === 'End') setIndex(slides.length - 1)
    }
    const el = containerRef.current
    el?.addEventListener('wheel', handler, { passive: true })
    window.addEventListener('keydown', keyHandler)
    return () => {
      el?.removeEventListener('wheel', handler)
      window.removeEventListener('keydown', keyHandler)
    }
  }, [index])

  useEffect(() => {
    // update hash for deep-linking
    history.replaceState(null, '', `#${slides[index].id}`)
  }, [index])

  function goNext() {
    setIndex((i) => Math.min(slides.length - 1, i + 1))
  }
  function goPrev() {
    setIndex((i) => Math.max(0, i - 1))
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* top controls */}
      <div className="fixed top-4 right-6 z-50 flex items-center gap-3">
        <button onClick={goPrev} aria-label="Previous" className="p-2 rounded-md bg-gray-800/70 hover:bg-gray-800">
          ◀
        </button>
        <button onClick={goNext} aria-label="Next" className="p-2 rounded-md bg-gray-800/70 hover:bg-gray-800">
          ▶
        </button>
      </div>

      {/* progress dots */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-transform ${i === index ? 'scale-125 bg-white' : 'bg-gray-600'}`}
            title={s.title}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.section
          key={slides[index].id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen flex items-center justify-center p-8"
        >
          <div className="max-w-4xl w-full">
            <motion.h1
              layout
              className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
              aria-live="polite"
            >
              {slides[index].title}
            </motion.h1>

            <motion.div
              layout
              className="mt-6 text-gray-300 bg-linear-to-b from-gray-900/40 to-transparent p-6 rounded-2xl shadow-lg"
            >
              {slides[index].content}
            </motion.div>

            <div className="mt-6 flex items-center justify-between text-sm text-gray-400">
              <div>Slide {index + 1} / {slides.length}</div>
              <div className="flex gap-4 items-center">
                <button onClick={() => setIndex(0)} className="underline">Start</button>
                <button onClick={() => setIndex(slides.length - 1)} className="underline">End</button>
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* footer (small) */}
      <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 text-xs text-gray-500">
        Tip: Use arrows, PageUp/PageDown, or the side dots to navigate 
      </footer>
    </div>
  )
}
