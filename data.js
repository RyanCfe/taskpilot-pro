const TOOL_DATA = {
  "quick": [
    {
      "name": "ChatGPT",
      "url": "https://chatgpt.com",
      "why": "Best all-round AI assistant for reasoning, coding, writing, images, study, and planning.",
      "tags": [
        "all-rounder",
        "reasoning"
      ]
    },
    {
      "name": "Claude",
      "url": "https://claude.ai",
      "why": "Great for long documents, natural writing, careful explanations, and code review.",
      "tags": [
        "writing",
        "long context"
      ]
    },
    {
      "name": "Perplexity",
      "url": "https://www.perplexity.ai",
      "why": "Best for web research with sources and quick current-context searching.",
      "tags": [
        "research",
        "sources"
      ]
    },
    {
      "name": "Gemini",
      "url": "https://gemini.google.com",
      "why": "Good Google ecosystem assistant for general tasks and multimodal help.",
      "tags": [
        "google",
        "multimodal"
      ]
    }
  ],
  "categories": {
    "ai_chat_search": {
      "name": "AI Chat & Search",
      "subtitle": "General AI, sources, web research, everyday answers",
      "tasks": [
        {
          "name": "Best general AI assistant",
          "risk": "low",
          "prompt": "Answer my question clearly. Give the direct answer first, explain the reasoning, include examples, and state assumptions.",
          "tools": [
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best overall assistant for reasoning, coding, writing, images, and learning.",
              "overall,reasoning"
            ],
            [
              "Claude",
              "https://claude.ai",
              "Great for long context, writing, analysis, and careful explanations.",
              "writing,long context"
            ],
            [
              "Gemini",
              "https://gemini.google.com",
              "Strong Google ecosystem assistant and multimodal helper.",
              "google,multimodal"
            ],
            [
              "Microsoft Copilot",
              "https://copilot.microsoft.com",
              "Good free assistant connected to Microsoft ecosystem.",
              "free,microsoft"
            ],
            [
              "Poe",
              "https://poe.com",
              "Useful when you want access to many models in one place.",
              "multi-model,hub"
            ]
          ]
        },
        {
          "name": "Research with sources",
          "risk": "medium",
          "prompt": "Research this topic using reliable sources. Summarize the answer, compare viewpoints, include citations/links, and clearly separate facts from assumptions.",
          "tools": [
            [
              "Perplexity",
              "https://www.perplexity.ai",
              "Best fit for quick source-backed web research.",
              "sources,web"
            ],
            [
              "Google Scholar",
              "https://scholar.google.com",
              "Best for academic papers and citations.",
              "academic,papers"
            ],
            [
              "Semantic Scholar",
              "https://www.semanticscholar.org",
              "Good for discovering papers and related research.",
              "academic,AI"
            ],
            [
              "Consensus",
              "https://consensus.app",
              "Useful for research-question style academic summaries.",
              "papers,summaries"
            ],
            [
              "Elicit",
              "https://elicit.com",
              "Good for literature review workflows and evidence tables.",
              "literature,review"
            ],
            [
              "NotebookLM",
              "https://notebooklm.google.com",
              "Best when you already have docs/PDFs to analyze.",
              "docs,notes"
            ]
          ]
        }
      ]
    },
    "coding_dev": {
      "name": "Coding & Dev",
      "subtitle": "Cursor, Blackbox, Copilot, agents, debugging, APIs",
      "tasks": [
        {
          "name": "Build an app with AI editor",
          "risk": "medium",
          "prompt": "Help me build this app. First create the file structure, then give code file by file, explain how to run it, and include debugging/security notes.",
          "tools": [
            [
              "Cursor",
              "https://cursor.com",
              "Best AI-first code editor for building real projects in a repo.",
              "AI editor,apps"
            ],
            [
              "Windsurf",
              "https://windsurf.com",
              "Strong AI coding editor with agentic workflows.",
              "AI editor,agent"
            ],
            [
              "GitHub Copilot",
              "https://github.com/features/copilot",
              "Best if you already use VS Code/GitHub daily.",
              "VS Code,GitHub"
            ],
            [
              "Claude Code",
              "https://www.anthropic.com/claude-code",
              "Powerful terminal-based coding agent for repo work.",
              "terminal,agent"
            ],
            [
              "Replit",
              "https://replit.com",
              "Good all-in-one coding and hosting for beginners.",
              "host,beginner"
            ],
            [
              "Bolt",
              "https://bolt.new",
              "Good browser-based full-stack prototyping.",
              "prototype,full-stack"
            ],
            [
              "Lovable",
              "https://lovable.dev",
              "Good no-code-ish AI app generation from prompts.",
              "AI app,no-code"
            ],
            [
              "v0",
              "https://v0.dev",
              "Best for polished React/shadcn UI generation.",
              "frontend,UI"
            ],
            [
              "Blackbox AI",
              "https://www.blackbox.ai",
              "Useful for quick code chat, code search, and snippets.",
              "code chat,snippets"
            ],
            [
              "Codeium",
              "https://codeium.com",
              "Good AI coding assistant alternative.",
              "autocomplete,developer"
            ]
          ]
        },
        {
          "name": "Fix code error",
          "risk": "low",
          "prompt": "I am getting this error. Explain what it means, why it happens, and give the corrected code step by step. Show the fixed code first.",
          "tools": [
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best beginner-friendly debugging explanations.",
              "debug,beginner"
            ],
            [
              "Claude",
              "https://claude.ai",
              "Great for long logs and careful reasoning.",
              "logs,long context"
            ],
            [
              "Cursor",
              "https://cursor.com",
              "Best when the bug is inside a full repo.",
              "repo,editor"
            ],
            [
              "Stack Overflow",
              "https://stackoverflow.com",
              "Best for known errors and community solutions.",
              "community,errors"
            ],
            [
              "Blackbox AI",
              "https://www.blackbox.ai",
              "Good for quick snippets and code help.",
              "snippets,code"
            ]
          ]
        },
        {
          "name": "API testing",
          "risk": "medium",
          "prompt": "Help me test this API endpoint. Include method, headers, body, expected response, edge cases, auth issues, rate limits, and common errors.",
          "tools": [
            [
              "Postman",
              "https://www.postman.com",
              "Best full API testing and collections tool.",
              "API,testing"
            ],
            [
              "Hoppscotch",
              "https://hoppscotch.io",
              "Fast browser-based API testing tool.",
              "API,browser"
            ],
            [
              "Bruno",
              "https://www.usebruno.com",
              "Good Git-friendly API client alternative.",
              "API,git"
            ],
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Good for explaining API test cases.",
              "explain,tests"
            ]
          ]
        }
      ]
    },
    "ppt_design": {
      "name": "PPT & Slides",
      "subtitle": "Slides, scripts, design, pitch decks",
      "tasks": [
        {
          "name": "Create presentation from topic",
          "risk": "low",
          "prompt": "Create a professional 10-slide presentation on this topic. For each slide, give title, 4 bullets, visual suggestion, and speaker notes.",
          "tools": [
            [
              "Gamma",
              "https://gamma.app",
              "Best quick AI slide/document generator.",
              "AI deck,fast"
            ],
            [
              "Canva",
              "https://www.canva.com",
              "Best easy templates, design, and exporting.",
              "templates,design"
            ],
            [
              "Beautiful.ai",
              "https://www.beautiful.ai",
              "Best polished business decks with design guardrails.",
              "business,polished"
            ],
            [
              "Tome",
              "https://tome.app",
              "Good for storytelling/pitch style decks.",
              "story,pitch"
            ],
            [
              "PowerPoint",
              "https://www.microsoft.com/microsoft-365/powerpoint",
              "Best if you already use Microsoft 365.",
              "office,slides"
            ],
            [
              "Google Slides",
              "https://slides.google.com",
              "Best simple free collaboration tool.",
              "free,collab"
            ],
            [
              "Slidesgo",
              "https://slidesgo.com",
              "Good free templates.",
              "templates,free"
            ]
          ]
        },
        {
          "name": "Speaker notes / viva script",
          "risk": "low",
          "prompt": "Turn this slide content into natural speaker notes. Make it easy to present, human, clear, and not robotic.",
          "tools": [
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best for structured speaker notes and viva prep.",
              "script,viva"
            ],
            [
              "Claude",
              "https://claude.ai",
              "Great for natural presentation writing.",
              "natural,writing"
            ],
            [
              "Gemini",
              "https://gemini.google.com",
              "Good general explanation and script support.",
              "google,script"
            ]
          ]
        }
      ]
    },
    "study_learning": {
      "name": "Study & Learning",
      "subtitle": "Notes, flashcards, quizzes, lectures, exam prep",
      "tasks": [
        {
          "name": "Explain topic for exam",
          "risk": "low",
          "prompt": "Explain this topic from basics. Give definitions, formulas, diagrams/intuition if useful, examples, and exam-style points. Do not skip steps.",
          "tools": [
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best custom tutor for step-by-step learning.",
              "tutor,steps"
            ],
            [
              "NotebookLM",
              "https://notebooklm.google.com",
              "Best for studying from your own PDFs and notes.",
              "PDFs,notes"
            ],
            [
              "Khan Academy",
              "https://www.khanacademy.org",
              "Best structured free basics for many subjects.",
              "structured,free"
            ],
            [
              "Perplexity",
              "https://www.perplexity.ai",
              "Good for source-backed explanations.",
              "sources,research"
            ],
            [
              "Quizlet",
              "https://quizlet.com",
              "Best for flashcards and revision.",
              "flashcards,revision"
            ],
            [
              "AnkiWeb",
              "https://ankiweb.net",
              "Best spaced repetition flashcards.",
              "spaced repetition,memory"
            ]
          ]
        },
        {
          "name": "Make flashcards/quizzes",
          "risk": "low",
          "prompt": "Convert this material into flashcards and exam questions. Include easy, medium, hard questions, answers, and short explanations.",
          "tools": [
            [
              "Quizlet",
              "https://quizlet.com",
              "Best quick flashcard tool.",
              "flashcards,quiz"
            ],
            [
              "AnkiWeb",
              "https://ankiweb.net",
              "Best serious spaced repetition system.",
              "memory,spaced"
            ],
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best for custom question generation.",
              "custom,questions"
            ],
            [
              "NotebookLM",
              "https://notebooklm.google.com",
              "Good for generating questions from your documents.",
              "docs,quiz"
            ]
          ]
        },
        {
          "name": "Lecture/video notes",
          "risk": "low",
          "prompt": "Summarize this lecture/transcript into clean notes. Include key concepts, formulas, examples, likely exam questions, and a revision checklist.",
          "tools": [
            [
              "NotebookLM",
              "https://notebooklm.google.com",
              "Best for notes from uploaded/transcript sources.",
              "notes,docs"
            ],
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Good for custom note formats.",
              "notes,custom"
            ],
            [
              "Otter.ai",
              "https://otter.ai",
              "Good for transcription and meeting/lecture notes.",
              "transcript,audio"
            ],
            [
              "Glasp",
              "https://glasp.co",
              "Useful for YouTube/web highlights and summaries.",
              "YouTube,highlights"
            ]
          ]
        }
      ]
    },
    "math": {
      "name": "Math & Problem Solving",
      "subtitle": "Calculus, algebra, stats, graphs, step solving",
      "tasks": [
        {
          "name": "Solve math step-by-step",
          "risk": "low",
          "prompt": "Solve this math problem step by step. First state the formula/theorem used, then substitute values, then show every calculation clearly.",
          "tools": [
            [
              "WolframAlpha",
              "https://www.wolframalpha.com",
              "Best computational math engine.",
              "math,compute"
            ],
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best for explanations and step-by-step tutoring.",
              "explain,steps"
            ],
            [
              "Symbolab",
              "https://www.symbolab.com",
              "Good for algebra/calculus steps.",
              "calculus,steps"
            ],
            [
              "Desmos",
              "https://www.desmos.com/calculator",
              "Best free graphing calculator.",
              "graphs,visual"
            ],
            [
              "GeoGebra",
              "https://www.geogebra.org",
              "Best interactive math visualization.",
              "visual,geometry"
            ],
            [
              "Photomath",
              "https://photomath.com",
              "Good mobile-first math solving reference.",
              "mobile,steps"
            ]
          ]
        },
        {
          "name": "Statistics / data science help",
          "risk": "low",
          "prompt": "Explain which statistical test/model to use, why, assumptions, formulas, Python code, and interpretation of results.",
          "tools": [
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best for explaining tests and Python code.",
              "stats,python"
            ],
            [
              "Julius AI",
              "https://julius.ai",
              "Good for dataset chat and charts.",
              "data,charts"
            ],
            [
              "WolframAlpha",
              "https://www.wolframalpha.com",
              "Good for calculations/distributions.",
              "compute,stats"
            ],
            [
              "Statology",
              "https://www.statology.org",
              "Useful for simple stats tutorials.",
              "tutorials,stats"
            ]
          ]
        }
      ]
    },
    "research_papers": {
      "name": "Research Papers",
      "subtitle": "Literature review, citations, paper summaries, PDFs",
      "tasks": [
        {
          "name": "Literature review",
          "risk": "medium",
          "prompt": "Help me do a literature review on this topic. Find key papers, group them by theme, summarize methods/results, identify gaps, and suggest research questions.",
          "tools": [
            [
              "Elicit",
              "https://elicit.com",
              "Best for literature review workflows.",
              "lit review,papers"
            ],
            [
              "Consensus",
              "https://consensus.app",
              "Good for research-question evidence summaries.",
              "evidence,papers"
            ],
            [
              "Semantic Scholar",
              "https://www.semanticscholar.org",
              "Good paper discovery and citation graph.",
              "papers,discovery"
            ],
            [
              "Google Scholar",
              "https://scholar.google.com",
              "Best broad academic paper search.",
              "academic,citations"
            ],
            [
              "ResearchRabbit",
              "https://www.researchrabbit.ai",
              "Good for exploring related papers visually.",
              "paper map,discovery"
            ],
            [
              "Connected Papers",
              "https://www.connectedpapers.com",
              "Good for visual paper networks.",
              "visual,papers"
            ],
            [
              "Scite",
              "https://scite.ai",
              "Good for seeing how papers are cited.",
              "citations,context"
            ]
          ]
        },
        {
          "name": "Summarize paper/PDF",
          "risk": "low",
          "prompt": "Summarize this research paper. Include research problem, methodology, dataset, findings, limitations, and how I can cite/use it.",
          "tools": [
            [
              "NotebookLM",
              "https://notebooklm.google.com",
              "Best for summarizing your uploaded papers.",
              "PDF,notes"
            ],
            [
              "ChatPDF",
              "https://www.chatpdf.com",
              "Simple chat with PDF tool.",
              "PDF,chat"
            ],
            [
              "Humata",
              "https://www.humata.ai",
              "Good for long PDF Q&A workflows.",
              "PDF,Q&A"
            ],
            [
              "Claude",
              "https://claude.ai",
              "Great for long document analysis.",
              "long context,papers"
            ],
            [
              "SciSpace",
              "https://typeset.io",
              "Useful for understanding papers and citations.",
              "paper,explain"
            ]
          ]
        }
      ]
    },
    "books_reading": {
      "name": "Books & Reading",
      "subtitle": "Summaries, reading plans, writing books, audiobooks",
      "tasks": [
        {
          "name": "Book summary / reading guide",
          "risk": "low",
          "prompt": "Create a reading guide for this book/topic. Give summary, key ideas, chapter-wise notes if possible, quotes to look for, and discussion questions.",
          "tools": [
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best custom reading guide assistant.",
              "books,guide"
            ],
            [
              "Blinkist",
              "https://www.blinkist.com",
              "Good quick summaries of nonfiction books.",
              "summary,nonfiction"
            ],
            [
              "Shortform",
              "https://www.shortform.com",
              "Good detailed book guides.",
              "detailed,summary"
            ],
            [
              "Goodreads",
              "https://www.goodreads.com",
              "Best for reviews and book discovery.",
              "reviews,books"
            ],
            [
              "Libby",
              "https://www.overdrive.com/apps/libby",
              "Good for library ebooks/audiobooks where available.",
              "library,audiobooks"
            ]
          ]
        },
        {
          "name": "Write/plan a book",
          "risk": "low",
          "prompt": "Help me plan this book. Give premise, characters, structure, chapter outline, themes, conflict, pacing, and revision plan.",
          "tools": [
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best flexible story planning and drafting assistant.",
              "writing,books"
            ],
            [
              "Claude",
              "https://claude.ai",
              "Great for natural prose and long-form writing.",
              "prose,long"
            ],
            [
              "Sudowrite",
              "https://www.sudowrite.com",
              "Specialized fiction-writing AI tool.",
              "fiction,novel"
            ],
            [
              "Notion",
              "https://www.notion.so",
              "Good for organizing worldbuilding/chapters.",
              "organize,notes"
            ],
            [
              "Scrivener",
              "https://www.literatureandlatte.com/scrivener/overview",
              "Professional long-form writing app.",
              "long-form,writing"
            ]
          ]
        }
      ]
    },
    "writing_originality": {
      "name": "Writing & Originality",
      "subtitle": "Rewrite, grammar, citations, originality checks",
      "tasks": [
        {
          "name": "Improve writing ethically",
          "risk": "low",
          "prompt": "Rewrite this text to be clearer, more natural, and professional while preserving my meaning. Do not fabricate facts or citations. Keep it human-written in tone.",
          "tools": [
            [
              "Claude",
              "https://claude.ai",
              "Best natural long-form rewriting.",
              "natural,writing"
            ],
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best flexible rewriting and tone control.",
              "rewrite,tone"
            ],
            [
              "Grammarly",
              "https://www.grammarly.com",
              "Best grammar and polish assistant.",
              "grammar,polish"
            ],
            [
              "QuillBot",
              "https://quillbot.com",
              "Good paraphrasing and summaries.",
              "paraphrase,summary"
            ],
            [
              "Hemingway Editor",
              "https://hemingwayapp.com",
              "Good for readability and simplifying text.",
              "readability,clarity"
            ]
          ]
        },
        {
          "name": "Originality / plagiarism / AI-risk review",
          "risk": "medium",
          "prompt": "Review this writing for originality, citation gaps, suspicious unsupported claims, generic AI-like wording, and places where I should add my own analysis. Do not help me deceive detectors; help me make it genuinely original and properly cited.",
          "tools": [
            [
              "Turnitin",
              "https://www.turnitin.com",
              "Common academic originality/plagiarism platform.",
              "originality,academic"
            ],
            [
              "GPTZero",
              "https://gptzero.me",
              "AI-writing risk detector; use as rough signal, not final truth.",
              "AI detector,signal"
            ],
            [
              "Originality.ai",
              "https://originality.ai",
              "AI/plagiarism checking platform.",
              "AI detector,plagiarism"
            ],
            [
              "Copyleaks",
              "https://copyleaks.com",
              "Plagiarism and AI-content detection platform.",
              "plagiarism,AI"
            ],
            [
              "Grammarly",
              "https://www.grammarly.com",
              "Good for grammar and citation-aware writing help.",
              "grammar,polish"
            ],
            [
              "Zotero",
              "https://www.zotero.org",
              "Best free citation/reference manager.",
              "citations,references"
            ]
          ]
        },
        {
          "name": "Citation generator/checker",
          "risk": "low",
          "prompt": "Help me create accurate citations for these sources. Identify missing details and format in APA/MLA/Chicago as needed.",
          "tools": [
            [
              "Zotero",
              "https://www.zotero.org",
              "Best free reference manager.",
              "citations,library"
            ],
            [
              "Scribbr Citation Generator",
              "https://www.scribbr.com/citation/generator/",
              "Easy citation generator.",
              "citations,student"
            ],
            [
              "MyBib",
              "https://www.mybib.com",
              "Free simple citation generator.",
              "free,citations"
            ],
            [
              "Google Scholar",
              "https://scholar.google.com",
              "Good for paper citation exports.",
              "academic,citations"
            ]
          ]
        }
      ]
    },
    "news": {
      "name": "News & Current Events",
      "subtitle": "News summaries, bias checks, explainers",
      "tasks": [
        {
          "name": "Understand news story",
          "risk": "medium",
          "prompt": "Explain this news story. Give the timeline, key facts, involved parties, why it matters, what is confirmed, and what is still uncertain.",
          "tools": [
            [
              "Perplexity",
              "https://www.perplexity.ai",
              "Best quick news research with sources.",
              "news,sources"
            ],
            [
              "Google News",
              "https://news.google.com",
              "Best broad news aggregator.",
              "news,aggregate"
            ],
            [
              "Reuters",
              "https://www.reuters.com",
              "Reliable global news wire.",
              "wire,global"
            ],
            [
              "AP News",
              "https://apnews.com",
              "Reliable news wire for factual reporting.",
              "wire,facts"
            ],
            [
              "Ground News",
              "https://ground.news",
              "Good for comparing coverage/bias across outlets.",
              "bias,compare"
            ],
            [
              "Wikipedia Current Events",
              "https://en.wikipedia.org/wiki/Portal:Current_events",
              "Useful high-level current event index.",
              "overview,current"
            ]
          ]
        },
        {
          "name": "Fact-check claim",
          "risk": "medium",
          "prompt": "Fact-check this claim. Find reliable sources, rate confidence, explain what evidence supports/contradicts it, and state if the answer is uncertain.",
          "tools": [
            [
              "Perplexity",
              "https://www.perplexity.ai",
              "Good for quick source-backed fact-checking.",
              "sources,quick"
            ],
            [
              "Snopes",
              "https://www.snopes.com",
              "Useful for viral claims and internet rumors.",
              "rumors,fact-check"
            ],
            [
              "PolitiFact",
              "https://www.politifact.com",
              "Useful for political claims in the US context.",
              "politics,fact-check"
            ],
            [
              "Google Fact Check Explorer",
              "https://toolbox.google.com/factcheck/explorer",
              "Search fact checks across publishers.",
              "fact-check,search"
            ],
            [
              "Reuters Fact Check",
              "https://www.reuters.com/fact-check/",
              "Reliable fact-checking source.",
              "reuters,facts"
            ]
          ]
        }
      ]
    },
    "image_design": {
      "name": "Image & Design",
      "subtitle": "Images, logos, posters, background removal",
      "tasks": [
        {
          "name": "Generate/edit image",
          "risk": "low",
          "prompt": "Create a detailed image prompt for this idea. Include subject, style, background, lighting, composition, mood, and text if needed.",
          "tools": [
            [
              "ChatGPT Images",
              "https://chatgpt.com",
              "Best conversational image generation and editing.",
              "image,edit"
            ],
            [
              "Midjourney",
              "https://www.midjourney.com",
              "Best artistic high-quality visuals.",
              "art,quality"
            ],
            [
              "Ideogram",
              "https://ideogram.ai",
              "Best for images with text/logos/posters.",
              "text,poster"
            ],
            [
              "Leonardo AI",
              "https://leonardo.ai",
              "Good for game assets and creative workflows.",
              "assets,creative"
            ],
            [
              "Adobe Firefly",
              "https://firefly.adobe.com",
              "Good commercial-friendly Adobe image workflow.",
              "adobe,commercial"
            ],
            [
              "Canva",
              "https://www.canva.com",
              "Best easy design editor for non-designers.",
              "templates,easy"
            ],
            [
              "Photopea",
              "https://www.photopea.com",
              "Best free Photoshop-like browser editor.",
              "free,editor"
            ],
            [
              "Remove.bg",
              "https://www.remove.bg",
              "Best quick background removal.",
              "background,quick"
            ]
          ]
        }
      ]
    },
    "video_audio": {
      "name": "Video & Audio",
      "subtitle": "Shorts, reels, AI video, voice, subtitles",
      "tasks": [
        {
          "name": "Make short video/reel",
          "risk": "low",
          "prompt": "Create a 30-second short video script. Include hook, scene ideas, voiceover, captions, B-roll ideas, and call-to-action.",
          "tools": [
            [
              "CapCut",
              "https://www.capcut.com",
              "Best beginner-friendly short video editor.",
              "shorts,edit"
            ],
            [
              "Runway",
              "https://runwayml.com",
              "Best advanced AI video generation/editing.",
              "AI video,advanced"
            ],
            [
              "Pika",
              "https://pika.art",
              "Good for AI video clips and creative generations.",
              "AI clips,creative"
            ],
            [
              "Canva",
              "https://www.canva.com",
              "Good social video templates.",
              "templates,simple"
            ],
            [
              "Descript",
              "https://www.descript.com",
              "Best text-based audio/video editing.",
              "transcript,edit"
            ],
            [
              "ElevenLabs",
              "https://elevenlabs.io",
              "Best realistic AI voices.",
              "voice,TTS"
            ],
            [
              "Pexels",
              "https://www.pexels.com",
              "Best free stock videos.",
              "stock,free"
            ],
            [
              "Pixabay",
              "https://pixabay.com/videos/",
              "Good free videos/music/images.",
              "free,stock"
            ]
          ]
        }
      ]
    },
    "data_analytics": {
      "name": "Data & Analytics",
      "subtitle": "Excel, dashboards, SQL, charts, BI",
      "tasks": [
        {
          "name": "Analyze dataset",
          "risk": "low",
          "prompt": "Analyze this dataset. Find trends, anomalies, summary statistics, useful charts, business insights, and explain the method step by step.",
          "tools": [
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best general data explanation and Python help.",
              "analysis,python"
            ],
            [
              "Julius AI",
              "https://julius.ai",
              "Good for chatting with datasets and charts.",
              "datasets,charts"
            ],
            [
              "Power BI",
              "https://powerbi.microsoft.com",
              "Best Microsoft BI/dashboard tool.",
              "dashboard,BI"
            ],
            [
              "Tableau",
              "https://www.tableau.com",
              "Best professional visual analytics platform.",
              "visuals,BI"
            ],
            [
              "Google Sheets",
              "https://sheets.google.com",
              "Best simple cloud spreadsheet collaboration.",
              "sheets,free"
            ],
            [
              "Observable",
              "https://observablehq.com",
              "Good for data visualization notebooks.",
              "visualization,notebooks"
            ]
          ]
        },
        {
          "name": "SQL help",
          "risk": "low",
          "prompt": "Help me write and understand this SQL query. Explain joins, filters, grouping, subqueries, indexes, and common mistakes.",
          "tools": [
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best beginner-friendly SQL explanations.",
              "SQL,learn"
            ],
            [
              "Mode SQL Tutorial",
              "https://mode.com/sql-tutorial",
              "Good structured SQL learning.",
              "tutorial,SQL"
            ],
            [
              "DB Fiddle",
              "https://www.db-fiddle.com",
              "Good browser SQL testing playground.",
              "test,SQL"
            ],
            [
              "PostgreSQL Docs",
              "https://www.postgresql.org/docs/",
              "Best official PostgreSQL reference.",
              "docs,official"
            ]
          ]
        }
      ]
    },
    "business_marketing": {
      "name": "Business & Marketing",
      "subtitle": "Product ideas, ads, SEO, landing pages",
      "tasks": [
        {
          "name": "Validate startup/product idea",
          "risk": "medium",
          "prompt": "Evaluate this product idea. Give target users, pain points, alternatives, competitors, MVP, pricing, risks, and first 10 users strategy.",
          "tools": [
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best flexible startup brainstorming assistant.",
              "startup,MVP"
            ],
            [
              "Perplexity",
              "https://www.perplexity.ai",
              "Best for competitor/market research with sources.",
              "market,sources"
            ],
            [
              "Google Trends",
              "https://trends.google.com",
              "Best quick demand/interest trend check.",
              "trends,free"
            ],
            [
              "Similarweb",
              "https://www.similarweb.com",
              "Useful for traffic/competitor research.",
              "competitors,traffic"
            ],
            [
              "Canva",
              "https://www.canva.com",
              "Good pitch visuals and marketing assets.",
              "assets,design"
            ]
          ]
        },
        {
          "name": "Landing page copy",
          "risk": "low",
          "prompt": "Write landing page copy for this product. Include headline, subheadline, benefits, features, objections, social proof ideas, FAQ, and CTA.",
          "tools": [
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best all-round copy generator.",
              "copy,ads"
            ],
            [
              "Claude",
              "https://claude.ai",
              "Great for natural copy and tone.",
              "writing,natural"
            ],
            [
              "Jasper",
              "https://www.jasper.ai",
              "Good marketing content platform for teams.",
              "marketing,teams"
            ],
            [
              "Copy.ai",
              "https://www.copy.ai",
              "Good sales/marketing templates.",
              "sales,templates"
            ],
            [
              "Framer",
              "https://www.framer.com",
              "Good for quickly building the landing page.",
              "landing,site"
            ]
          ]
        }
      ]
    },
    "shopping_deals": {
      "name": "Shopping & Deals",
      "subtitle": "Product research, price history, comparisons",
      "tasks": [
        {
          "name": "Choose best product",
          "risk": "medium",
          "prompt": "Help me choose the best product for this need and budget. Compare options, pros/cons, reliability, reviews, hidden costs, and what to avoid.",
          "tools": [
            [
              "Perplexity",
              "https://www.perplexity.ai",
              "Best product research with web context and sources.",
              "research,compare"
            ],
            [
              "Google Shopping",
              "https://shopping.google.com",
              "Best broad product search and price comparison.",
              "prices,products"
            ],
            [
              "Amazon India",
              "https://www.amazon.in",
              "Best for reviews and availability in India.",
              "reviews,India"
            ],
            [
              "Flipkart",
              "https://www.flipkart.com",
              "Best Indian marketplace comparison with Amazon.",
              "India,marketplace"
            ],
            [
              "Keepa",
              "https://keepa.com",
              "Best Amazon price history tracking.",
              "price history,Amazon"
            ],
            [
              "Price History",
              "https://pricehistory.app",
              "Useful for Indian e-commerce price tracking.",
              "India,price"
            ],
            [
              "Reddit Search",
              "https://www.reddit.com/search/",
              "Good for real user opinions and long-term issues.",
              "opinions,users"
            ]
          ]
        },
        {
          "name": "Check if deal is worth it",
          "risk": "medium",
          "prompt": "Check whether this deal is actually good. Compare current price, usual price, alternatives, hidden costs, reviews, and whether I should wait.",
          "tools": [
            [
              "Keepa",
              "https://keepa.com",
              "Best Amazon price history.",
              "price history"
            ],
            [
              "Price History",
              "https://pricehistory.app",
              "Good Indian e-commerce price history tool.",
              "India,price"
            ],
            [
              "Google Shopping",
              "https://shopping.google.com",
              "Good cross-store price check.",
              "compare"
            ],
            [
              "Perplexity",
              "https://www.perplexity.ai",
              "Good for alternatives and reviews.",
              "research"
            ],
            [
              "Reddit Search",
              "https://www.reddit.com/search/",
              "Good for long-term user opinions.",
              "opinions"
            ]
          ]
        }
      ]
    },
    "trading_finance": {
      "name": "Trading & Finance",
      "subtitle": "Charts, market research, finance news",
      "tasks": [
        {
          "name": "Analyze stock/crypto idea",
          "risk": "high",
          "prompt": "Analyze this trading/investing idea for education only. Summarize trend, support/resistance, risks, recent news, fundamentals if relevant, and what would invalidate the idea. Do not give guaranteed advice.",
          "tools": [
            [
              "TradingView",
              "https://www.tradingview.com",
              "Best charting platform and indicators.",
              "charts,technical"
            ],
            [
              "Perplexity Finance",
              "https://www.perplexity.ai/finance",
              "Good finance research and recent market context.",
              "research,markets"
            ],
            [
              "Yahoo Finance",
              "https://finance.yahoo.com",
              "Best free financial data/news overview.",
              "data,news"
            ],
            [
              "FinChat",
              "https://finchat.io",
              "Good AI stock research and fundamentals.",
              "stocks,fundamentals"
            ],
            [
              "Koyfin",
              "https://www.koyfin.com",
              "Good market dashboards and analytics.",
              "analytics,markets"
            ],
            [
              "Investing.com",
              "https://www.investing.com",
              "Good market calendar/news/tools.",
              "calendar,markets"
            ],
            [
              "Screener.in",
              "https://www.screener.in",
              "Good Indian stock fundamental screening.",
              "India,stocks"
            ],
            [
              "Trendlyne",
              "https://trendlyne.com",
              "Good Indian stock analytics/screening.",
              "India,analytics"
            ]
          ]
        },
        {
          "name": "Build TradingView indicator",
          "risk": "high",
          "prompt": "Help me create a TradingView Pine Script indicator for this strategy. Explain logic, inputs, signals, backtesting limitations, risks, and give clean Pine Script code.",
          "tools": [
            [
              "TradingView",
              "https://www.tradingview.com",
              "Best place to write/test Pine Script.",
              "Pine,charts"
            ],
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Good Pine Script generation/debugging.",
              "code,Pine"
            ],
            [
              "Claude",
              "https://claude.ai",
              "Good for explaining trading logic carefully.",
              "logic,explain"
            ],
            [
              "TradingView Scripts",
              "https://www.tradingview.com/scripts/",
              "Good for studying public indicators.",
              "examples,indicators"
            ]
          ]
        }
      ]
    },
    "productivity": {
      "name": "Productivity & Automation",
      "subtitle": "Notes, tasks, meetings, workflows",
      "tasks": [
        {
          "name": "Organize my work",
          "risk": "low",
          "prompt": "Turn this messy list into a clear plan. Group tasks, prioritize, estimate time, and create a today/tomorrow/this-week schedule.",
          "tools": [
            [
              "Notion AI",
              "https://www.notion.so/product/ai",
              "Best notes + docs + planning workspace.",
              "notes,workspace"
            ],
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best flexible planning assistant.",
              "planning,AI"
            ],
            [
              "Todoist",
              "https://todoist.com",
              "Best simple task manager.",
              "tasks,simple"
            ],
            [
              "Motion",
              "https://www.usemotion.com",
              "Good AI calendar/task scheduling.",
              "calendar,schedule"
            ],
            [
              "Zapier",
              "https://zapier.com",
              "Best no-code automation between apps.",
              "automation,no-code"
            ],
            [
              "Make",
              "https://www.make.com",
              "Good visual automation builder.",
              "automation,visual"
            ]
          ]
        },
        {
          "name": "Summarize meeting/video",
          "risk": "low",
          "prompt": "Summarize this meeting/video/transcript. Give decisions, action items, deadlines, risks, and a follow-up message.",
          "tools": [
            [
              "Otter.ai",
              "https://otter.ai",
              "Good meeting transcription and summaries.",
              "meetings,transcript"
            ],
            [
              "Fireflies.ai",
              "https://fireflies.ai",
              "Good meeting notes and workflow integrations.",
              "meetings,notes"
            ],
            [
              "Fathom",
              "https://fathom.video",
              "Good free-ish meeting notes and summaries.",
              "meetings,summary"
            ],
            [
              "Descript",
              "https://www.descript.com",
              "Good transcript editing for audio/video.",
              "transcript,edit"
            ],
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best custom summary formatting.",
              "summary,custom"
            ]
          ]
        }
      ]
    },
    "no_code_web": {
      "name": "No-Code & Websites",
      "subtitle": "Landing pages, web apps, automation",
      "tasks": [
        {
          "name": "Build website/app without much code",
          "risk": "medium",
          "prompt": "Help me build this website/app. Suggest best no-code/low-code stack, pages, database needs, auth/payment needs, and MVP steps.",
          "tools": [
            [
              "Framer",
              "https://www.framer.com",
              "Best fast landing pages and startup sites.",
              "landing,fast"
            ],
            [
              "Webflow",
              "https://webflow.com",
              "Best visual builder for polished websites.",
              "websites,design"
            ],
            [
              "Bubble",
              "https://bubble.io",
              "Best no-code full web app builder.",
              "web app,no-code"
            ],
            [
              "Softr",
              "https://www.softr.io",
              "Good portals/internal apps on Airtable/Sheets.",
              "portal,no-code"
            ],
            [
              "Airtable",
              "https://airtable.com",
              "Best spreadsheet-database hybrid.",
              "database,no-code"
            ],
            [
              "Supabase",
              "https://supabase.com",
              "Best developer-friendly backend/auth/database.",
              "backend,database"
            ],
            [
              "Stripe",
              "https://stripe.com",
              "Best payment infrastructure.",
              "payments"
            ],
            [
              "Zapier",
              "https://zapier.com",
              "Best workflow automation.",
              "automation"
            ]
          ]
        }
      ]
    },
    "security_launch": {
      "name": "Security Launch",
      "subtitle": "RLS, API keys, rate limits, CORS, CAPTCHA",
      "tasks": [
        {
          "name": "Security review before launch",
          "risk": "high",
          "prompt": "Review my app as a security specialist. Check privacy, RLS/database rules, exposed API keys, server-side validation, CORS, CAPTCHA, rate limits, safe errors, OWASP issues, and give prioritized fixes.",
          "tools": [
            [
              "ChatGPT",
              "https://chatgpt.com",
              "Best for turning context/code into fix checklist.",
              "checklist,fixes"
            ],
            [
              "Claude",
              "https://claude.ai",
              "Great for long code/security reviews.",
              "long context,review"
            ],
            [
              "OWASP Top 10",
              "https://owasp.org/www-project-top-ten/",
              "Best official web app risk reference.",
              "security,reference"
            ],
            [
              "Mozilla Observatory",
              "https://observatory.mozilla.org",
              "Good for checking security headers.",
              "headers,scan"
            ],
            [
              "Snyk",
              "https://snyk.io",
              "Good dependency/security scanning.",
              "scan,deps"
            ],
            [
              "GitHub Secret Scanning Docs",
              "https://docs.github.com/en/code-security/secret-scanning",
              "Useful for secret scanning guidance.",
              "secrets,GitHub"
            ],
            [
              "Supabase RLS Docs",
              "https://supabase.com/docs/guides/database/postgres/row-level-security",
              "Useful for Supabase row-level security.",
              "supabase,RLS"
            ]
          ]
        }
      ]
    }
  }
};
const LAUNCH_CHECKLIST = [
  {
    "id": "privacy",
    "title": "Privacy policy + data map",
    "desc": "Know what data you collect, where it lives, who can access it, and whether users can delete it.",
    "prompt": "Review my app for privacy risks. List all user data collected, where it is stored, who can access it, retention risks, and what a basic privacy policy should disclose."
  },
  {
    "id": "rls",
    "title": "Database access / RLS",
    "desc": "Supabase/Firebase apps must prevent users from reading other users' data.",
    "prompt": "Review my database security. Check row-level security/rules/policies and confirm users can only read and write their own records."
  },
  {
    "id": "failure",
    "title": "Failure cases",
    "desc": "Test wrong passwords, duplicate signups, expired links, missing fields, repeated requests, and network failures.",
    "prompt": "Create a failure-case test plan for my app. Include auth, signup, password reset, payments, forms, APIs, and edge cases."
  },
  {
    "id": "headers",
    "title": "Security posture",
    "desc": "Check baseline headers, HTTPS, auth cookie/session settings, and obvious gaps.",
    "prompt": "Review my app security posture: headers, HTTPS, cookies, sessions, CORS, auth handling, and production settings."
  },
  {
    "id": "owasp",
    "title": "OWASP-style review",
    "desc": "Check SQL injection, XSS, broken auth, access control, insecure design, and logging.",
    "prompt": "Review my app against OWASP Top 10 style risks. Highlight vulnerabilities and give a prioritized fix list."
  },
  {
    "id": "serverValidation",
    "title": "Server-side validation",
    "desc": "Client-side validation is UX. Validate again on the backend.",
    "prompt": "Check my API routes and backend forms for server-side validation: data types, required fields, length limits, sanitization, and authorization checks."
  },
  {
    "id": "leaks",
    "title": "Sensitive data leaks",
    "desc": "Avoid leaking .env values, secrets in logs, and too much data in API responses.",
    "prompt": "Check my app for credential or sensitive data leaks in frontend code, API responses, logs, environment variables, and build output."
  },
  {
    "id": "frontendKeys",
    "title": "No private API keys in frontend",
    "desc": "If a secret is in browser code, assume it is public.",
    "prompt": "Ensure no private API keys, tokens, or secrets are exposed in frontend code or browser network calls. Tell me what must move server-side."
  },
  {
    "id": "rateLimits",
    "title": "Rate limits + cost caps",
    "desc": "Protect paid APIs from abuse and accidental bill spikes.",
    "prompt": "Design rate limits for my app endpoints and paid API calls. Include per-user limits, IP limits, daily caps, alerts at 50%, and abuse cases."
  },
  {
    "id": "captchaCors",
    "title": "CAPTCHA + CORS",
    "desc": "Protect public forms from bots and allow only trusted origins.",
    "prompt": "Review my public forms and API CORS settings. Tell me where to add CAPTCHA, which origins to allow, and what to block."
  },
  {
    "id": "errors",
    "title": "Safe error messages",
    "desc": "Show generic errors to users. Log full errors server-side.",
    "prompt": "Review my app's error handling. Ensure users see generic messages, stack traces are hidden in production, and full errors are logged server-side."
  },
  {
    "id": "payments",
    "title": "Payments/webhooks",
    "desc": "Verify webhooks server-side and never trust client payment status.",
    "prompt": "Review my payment integration. Check webhook verification, idempotency, server-side payment status checks, refund flows, and abuse cases."
  }
];
const CONTEXT_ACTIONS = [
  {
    "id": "explain",
    "title": "Explain selected text",
    "tool": "https://chatgpt.com",
    "prompt": "Explain the selected text in simple terms. Give examples and define difficult words."
  },
  {
    "id": "summarize",
    "title": "Summarize selected text",
    "tool": "https://chatgpt.com",
    "prompt": "Summarize the selected text into clear bullet points, key ideas, and action items if any."
  },
  {
    "id": "rewrite",
    "title": "Rewrite selected text clearly",
    "tool": "https://claude.ai",
    "prompt": "Rewrite the selected text to be clear, natural, and professional while preserving meaning."
  },
  {
    "id": "research",
    "title": "Research selected topic with sources",
    "tool": "https://www.perplexity.ai",
    "prompt": "Research the selected topic using reliable sources. Summarize key facts, citations, and uncertainties."
  },
  {
    "id": "study",
    "title": "Make study notes from selected text",
    "tool": "https://chatgpt.com",
    "prompt": "Turn the selected text into exam-ready study notes with definitions, examples, likely questions, and revision checklist."
  },
  {
    "id": "ppt",
    "title": "Turn selected text into PPT outline",
    "tool": "https://gamma.app",
    "prompt": "Turn the selected text into a clean presentation outline with slide titles, bullets, visuals, and speaker notes."
  },
  {
    "id": "factcheck",
    "title": "Fact-check selected claim",
    "tool": "https://www.perplexity.ai",
    "prompt": "Fact-check the selected claim. Separate confirmed facts, disputed claims, missing context, and reliable sources."
  },
  {
    "id": "originality",
    "title": "Originality/citation review",
    "tool": "https://chatgpt.com",
    "prompt": "Review the selected writing for originality, citation gaps, generic wording, unsupported claims, and places to add my own analysis. Do not help deceive detectors."
  }
];
