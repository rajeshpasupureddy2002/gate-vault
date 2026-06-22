# GATE 2027 Study Vault & Developer Dashboard

An interactive, high-performance study dashboard tailored for the **GATE 2027** exam (organized by **IIT Madras**), featuring Engineering Mathematics, Core Computer Science Technical Subjects, General Aptitude, and a Parallel Developer Skill-Upgrading Track.

---

## 🚀 Key Features

* **Syllabus-Aligned Learning**: Subject cards display the exact syllabus checkpoints outlined by the organizing institute (IIT Madras).
* **Unified Video Player**: Clicking a subject card dynamically embeds and loads the corresponding playlist or video tutorial inside the player.
* **Progress Tracking**: Change your status (*Not Started*, *In Progress*, or *Completed*) for each subject and watch the header progress bar update in real-time.
* **Persistent Notepad**: Take notes, write equations, or log video timestamps. Notes are auto-saved on a debounce and saved per subject.
* **Offline Persistence**: All progress checkboxes and study notes are automatically saved using the browser's `LocalStorage`.
* **Search & Filters**: Quickly filter by categories (Maths, Technical, Aptitude, Parallel Skills) or search for specific keywords (e.g., "SQL", "Saurabh", "Kubernetes").

---

## 📚 Subject & Syllabus Database

### 1. Engineering Mathematics
* **Discrete Mathematics** (Sridhar - Unacademy): Propositional and first order logic. Sets, relations, functions, partial orders and lattices. Monoids, Groups. Graphs: connectivity, matching, colouring. Combinatorics: counting, recurrence relations, generating functions.
* **Linear Algebra** (Sachin Mittal - YouTube): Matrices, determinants, system of linear equations, eigenvalues and eigenvectors, LU decomposition.
* **Calculus** (Dr. GP Sir - YouTube): Limits, continuity and differentiability, Maxima and minima, Mean value theorem, Integration.
* **Probability and Statistics** (Dr. GP Sir - YouTube): Random variables, Uniform, normal, exponential, Poisson and binomial distributions. Mean, median, mode and standard deviation. Conditional probability and Bayes theorem.

### 2. Technical CS Subjects
* **Digital Logic** (GFG - GeeksforGeeks): Boolean algebra. Combinational and sequential circuits. Minimization. Number representations and computer arithmetic (fixed and floating point).
* **Computer Organization & Architecture** (Bharat Acharya Sir - YouTube): Machine instructions and addressing modes. ALU, data‐path and control unit. Instruction pipelining, pipeline hazards. Memory hierarchy: cache, main memory and secondary storage; I/O interface (interrupt and DMA mode).
* **Programming & Data Structures** (Vishvadeep Gothi - YouTube): Programming in C. Recursion. Arrays, stacks, queues, linked lists, trees, binary search trees, binary heaps, graphs.
* **Algorithms** (Dr. Khaleel Khan - YouTube): Searching, sorting, hashing. Asymptotic worst case time and space complexity. Algorithm design techniques: greedy, dynamic programming and divide‐and‐conquer. Graph traversals, minimum spanning trees, shortest paths.
* **Theory of Computation** (Ankit Doyal - YouTube): Regular expressions and finite automata. Context-free grammars and push-down automata. Regular and context-free languages, pumping lemma. Turing machines and undecidability.
* **Compiler Design** (Deva Sir - YouTube): Lexical analysis, parsing, syntax-directed translation. Runtime environments. Intermediate code generation. Local optimization, Data flow analyses: constant propagation, liveness analysis, common sub expression elimination.
* **Operating System** (Dr. Khaleel Khan - YouTube): System calls, processes, threads, inter‐process communication, concurrency and synchronization. Deadlock. CPU and I/O scheduling. Memory management and virtual memory. File systems.
* **Databases** (Vishvadeep Gothi - YouTube): ER‐model. Relational model: relational algebra, tuple calculus, SQL. Integrity constraints, normal forms. File organization, indexing (e.g., B and B+ trees). Transactions and concurrency control.
* **Computer Networks** (Ankit Doyal - YouTube): Concept of layering: OSI and TCP/IP Protocol Stacks; packet, circuit and virtual circuit-switching; framing, error detection, Medium Access Control, Ethernet bridging; Routing protocols (shortest path, flooding, distance vector, link state); IP addressing, IPv4, CIDR, ARP, DHCP, ICMP, NAT; flow & congestion control, UDP, TCP, sockets; DNS, SMTP, HTTP, FTP, Email.

### 3. General Aptitude
* **Verbal Aptitude** (Saurabh Thakur - Apti Xpress): Basic English grammar: tenses, articles, adjectives, prepositions, conjunctions, verb-noun agreement, other parts of speech. Vocabulary, idioms/phrases, reading comprehension, narrative sequencing.
* **Quantitative Aptitude** (Saurabh Thakur - Apti Xpress): Data interpretation (graphs, plots, maps, tables). Numerical computation and estimation (ratios, percentages, powers, exponents, logarithms, permutations & combinations, series). Mensuration, geometry, elementary statistics & probability.
* **Analytical Aptitude** (Saurabh Thakur - Apti Xpress): Logic: deduction and induction, Analogy, Numerical relations and reasoning.
* **Spatial Aptitude** (GATE Wallah - Physics Wallah): Transformation of shapes: translation, rotation, scaling, mirroring, assembling, grouping, paper folding, cutting, patterns in 2D and 3D.

### 4. Parallel Developer Learning Track
* **Computer Networks & CCNA (Main)** (NetworkChuck): Primary focus parallel learning covering core security, routers, switches, subnets, and modern network topologies.
* **Docker & Kubernetes** (TechWorld with Nana): Microservice infrastructure, Dockerfiles, containers, pods, services, clusters, and scaling.
* **Backend Frameworks & REST APIs** (freeCodeCamp): Core Java, Java Collections, Spring Boot, Node.js, Express.js, Golang, OOPS, DBMS, MySQL, JDBC, and SQL Workbench.
* **AWS Cloud & Model Deployments** (TechWorld with Nana): Deploying Machine Learning and AI models, setting up AWS EC2/S3/RDS, and managing CI/CD pipelines.
* **Apache Kafka & Messaging** (Hussein Nasser): Distributed message streaming queues, partition setups, replication, and broker architectures.
* **Cyber Security, Testing & SDLC** (NetworkChuck): Cyber Security fundamentals, root cause analysis, software testing, automation, SDLC, reporting, and workflow collaboration tools (Jira, Confluence, Slack, Power BI, Tableau).

---

## 🛠️ Deploying to GitHub Pages or Vercel

Since this is a client-side static web application (HTML, CSS, and JS), it can be deployed for **free** in seconds.

### Option A: Deploying to GitHub Pages (Recommended)
1. Initialize git and commit your files locally:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of GATE 2027 Study Vault"
   ```
2. Create a new repository on your GitHub account named `gate-2027-vault`.
3. Link your local project to GitHub and push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/gate-2027-vault.git
   git branch -M main
   git push -u origin main
   ```
4. Go to your repository on GitHub:
   - Click on **Settings** -> **Pages** (on the left menu).
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Under **Branch**, choose `main` and `/ (root)` folder.
   - Click **Save**.
   - In 1-2 minutes, GitHub will give you a live URL (e.g., `https://YOUR_USERNAME.github.io/gate-2027-vault/`).

### Option B: Deploying to Vercel
1. Install the Vercel CLI globally (requires Node.js):
   ```bash
   npm install -g vercel
   ```
2. Open your terminal in the project directory and run:
   ```bash
   vercel
   ```
3. Follow the interactive prompts:
   - Log in to your Vercel account.
   - Set project name (e.g., `gate-2027-vault`).
   - Confirm settings (it will auto-detect as a Static Project).
4. Run `vercel --prod` to deploy it to production. Vercel will generate a live preview URL (e.g., `https://gate-2027-vault.vercel.app`).
