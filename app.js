// GATE Play-List 2027 Subject Database
const subjects = [
    // Engineering Mathematics
    {
        id: 'maths-discrete',
        title: 'Discrete Mathematics',
        category: 'maths',
        instructor: 'Sridhar',
        source: 'Unacademy',
        description: 'Propositional and first order logic. Sets, relations, functions, partial orders and lattices. Monoids, Groups. Graphs: connectivity, matching, colouring. Combinatorics: counting, recurrence relations, generating functions.',
        subtopics: [
            'Propositional and first order logic',
            'Sets, relations, functions',
            'Partial orders and lattices',
            'Monoids and Groups',
            'Graphs: connectivity, matching, colouring',
            'Combinatorics: counting, recurrence relations, generating functions'
        ],
        link: 'https://youtube.com/playlist?list=PLOG_8OlGMp73__IUE4eSoLgaufkY7JWTO&si=V9FyNIYL7eEPNIFE',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLOG_8OlGMp73__IUE4eSoLgaufkY7JWTO'
    },
    {
        id: 'maths-linear-algebra',
        title: 'Linear Algebra',
        category: 'maths',
        instructor: 'Sachin Mittal',
        source: 'YouTube',
        description: 'Matrices, determinants, system of linear equations, eigenvalues and eigenvectors, LU decomposition.',
        subtopics: [
            'Matrices and determinants',
            'System of linear equations',
            'Eigenvalues and eigenvectors',
            'LU decomposition'
        ],
        link: 'https://www.youtube.com/playlist?list=PLgjejdknTfWNZBdiAI9k85B0GWDqBI0G4',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLgjejdknTfWNZBdiAI9k85B0GWDqBI0G4'
    },
    {
        id: 'maths-calculus',
        title: 'Calculus',
        category: 'maths',
        instructor: 'Dr. GP Sir',
        source: 'YouTube',
        description: 'Limits, continuity and differentiability, Maxima and minima, Mean value theorem, Integration.',
        subtopics: [
            'Limits, continuity and differentiability',
            'Maxima and minima',
            'Mean value theorem',
            'Integration'
        ],
        link: 'https://www.youtube.com/playlist?list=PLu4m54WggX8d7Wd-oB3n9tOPhW_r5tZ4j',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLu4m54WggX8d7Wd-oB3n9tOPhW_r5tZ4j'
    },
    {
        id: 'maths-probability',
        title: 'Probability and Statistics',
        category: 'maths',
        instructor: 'Dr. GP Sir',
        source: 'YouTube',
        description: 'Random variables, Uniform, normal, exponential, Poisson and binomial distributions. Mean, median, mode and standard deviation. Conditional probability and Bayes theorem.',
        subtopics: [
            'Random variables & standard distributions (Uniform, Normal, Exponential)',
            'Poisson and Binomial distributions',
            'Mean, median, mode and standard deviation',
            'Conditional probability and Bayes theorem'
        ],
        link: 'https://www.youtube.com/playlist?list=PLIU86IV5HmhQdS7PuUf5me6_cyW0bkfpj',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLIU86IV5HmhQdS7PuUf5me6_cyW0bkfpj'
    },
    // Technical Part
    {
        id: 'tech-digital-logic',
        title: 'Digital Logic',
        category: 'technical',
        instructor: 'GFG',
        source: 'GeeksforGeeks',
        description: 'Boolean algebra. Combinational and sequential circuits. Minimization. Number representations and computer arithmetic (fixed and floating point).',
        subtopics: [
            'Boolean algebra',
            'Combinational circuits',
            'Sequential circuits',
            'Minimization',
            'Number representations & computer arithmetic (fixed and floating point)'
        ],
        link: 'https://www.youtube.com/playlist?list=PLs5_RdaOMsTsp-A2M8Fh0c8KkPz7HlPqJ',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLs5_RdaOMsTsp-A2M8Fh0c8KkPz7HlPqJ'
    },
    {
        id: 'tech-coa',
        title: 'Computer Organization & Architecture',
        category: 'technical',
        instructor: 'Bharat Acharya Sir',
        source: 'YouTube',
        description: 'Machine instructions and addressing modes. ALU, data‐path and control unit. Instruction pipelining, pipeline hazards. Memory hierarchy: cache, main memory and secondary storage; I/O interface (interrupt and DMA mode).',
        subtopics: [
            'Machine instructions and addressing modes',
            'ALU, data‐path and control unit',
            'Instruction pipelining and pipeline hazards',
            'Memory hierarchy: cache, main memory, secondary storage',
            'I/O interface (interrupt and DMA mode)'
        ],
        link: 'https://www.youtube.com/playlist?list=PL3B20EB15EE9646D9',
        embed: 'https://www.youtube.com/embed/videoseries?list=PL3B20EB15EE9646D9'
    },
    {
        id: 'tech-programming-ds',
        title: 'Programming & Data Structures',
        category: 'technical',
        instructor: 'Vishvadeep Gothi',
        source: 'YouTube',
        description: 'Programming in C. Recursion. Arrays, stacks, queues, linked lists, trees, binary search trees, binary heaps, graphs.',
        subtopics: [
            'Programming in C',
            'Recursion',
            'Arrays, stacks, and queues',
            'Linked lists and trees',
            'Binary search trees and binary heaps',
            'Graphs representations'
        ],
        link: 'https://www.youtube.com/playlist?list=PLG9aCp4uE-s0H23mP3sM9wH7QvR8W2h7E',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLG9aCp4uE-s0H23mP3sM9wH7QvR8W2h7E'
    },
    {
        id: 'tech-algorithms',
        title: 'Algorithms',
        category: 'technical',
        instructor: 'Dr. Khaleel Khan',
        source: 'YouTube',
        description: 'Searching, sorting, hashing. Asymptotic worst case time and space complexity. Algorithm design techniques: greedy, dynamic programming and divide‐and‐conquer. Graph traversals, minimum spanning trees, shortest paths.',
        subtopics: [
            'Searching, sorting, and hashing',
            'Asymptotic worst case time and space complexity',
            'Algorithm design: greedy & dynamic programming',
            'Algorithm design: divide‐and‐conquer',
            'Graph traversals, minimum spanning trees, shortest paths'
        ],
        link: 'https://www.youtube.com/playlist?list=PLvTTv60o7qj-PgF3DhvvTK6_-g_FU8wCT',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLvTTv60o7qj-PgF3DhvvTK6_-g_FU8wCT'
    },
    {
        id: 'tech-toc',
        title: 'Theory of Computation (TOC)',
        category: 'technical',
        instructor: 'Ankit Doyal',
        source: 'YouTube',
        description: 'Regular expressions and finite automata. Context-free grammars and push-down automata. Regular and context-free languages, pumping lemma. Turing machines and undecidability.',
        subtopics: [
            'Regular expressions and finite automata',
            'Context-free grammars and push-down automata',
            'Regular and context-free languages, pumping lemma',
            'Turing machines and undecidability'
        ],
        link: 'https://www.youtube.com/playlist?list=PLG9aCp4uE-s21t3nI-j6k3N6F5Nq8T2vB',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLG9aCp4uE-s21t3nI-j6k3N6F5Nq8T2vB'
    },
    {
        id: 'tech-compiler-design',
        title: 'Compiler Design (CD)',
        category: 'technical',
        instructor: 'Deva Sir',
        source: 'YouTube',
        description: 'Lexical analysis, parsing, syntax-directed translation. Runtime environments. Intermediate code generation. Local optimization, Data flow analyses: constant propagation, liveness analysis, common sub expression elimination.',
        subtopics: [
            'Lexical analysis and parsing',
            'Syntax-directed translation',
            'Runtime environments & intermediate code generation',
            'Local optimization',
            'Data flow analysis: constant propagation, liveness, common sub-expression'
        ],
        link: 'https://www.youtube.com/playlist?list=PLKLGr8sEyGFJ-W4W_zU5O1N73wK7p8wK6',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLKLGr8sEyGFJ-W4W_zU5O1N73wK7p8wK6'
    },
    {
        id: 'tech-operating-systems',
        title: 'Operating System (OS)',
        category: 'technical',
        instructor: 'Dr. Khaleel Khan',
        source: 'YouTube',
        description: 'System calls, processes, threads, inter‐process communication, concurrency and synchronization. Deadlock. CPU and I/O scheduling. Memory management and virtual memory. File systems.',
        subtopics: [
            'System calls, processes, and threads',
            'Inter‐process communication, concurrency, and synchronization',
            'Deadlock prevention, avoidance, and detection',
            'CPU and I/O scheduling',
            'Memory management and virtual memory',
            'File systems'
        ],
        link: 'https://www.youtube.com/playlist?list=PLvTTv60o7qj_PgF3DhvvTK6_-g_FU8wCT',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLvTTv60o7qj_PgF3DhvvTK6_-g_FU8wCT'
    },
    {
        id: 'tech-databases',
        title: 'Databases (DB)',
        category: 'technical',
        instructor: 'Vishvadeep Gothi',
        source: 'YouTube',
        description: 'ER‐model. Relational model: relational algebra, tuple calculus, SQL. Integrity constraints, normal forms. File organization, indexing (e.g., B and B+ trees). Transactions and concurrency control.',
        subtopics: [
            'ER‐model',
            'Relational model: relational algebra, tuple calculus, and SQL',
            'Integrity constraints and normal forms',
            'File organization & indexing (B and B+ trees)',
            'Transactions and concurrency control'
        ],
        link: 'https://www.youtube.com/playlist?list=PLG9aCp4uE-s1H2OZGJ2AMu_yihTJBHLxf',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLG9aCp4uE-s1H2OZGJ2AMu_yihTJBHLxf'
    },
    {
        id: 'tech-networks',
        title: 'Computer Networks (CN)',
        category: 'technical',
        instructor: 'Ankit Doyal',
        source: 'YouTube',
        description: 'Concept of layering: OSI and TCP/IP Protocol Stacks; Basics of packet, circuit and virtual circuit-switching; Data link layer: framing, error detection, Medium Access Control, Ethernet bridging; Routing protocols: shortest path, flooding, distance vector and link state routing; Fragmentation and IP addressing, IPv4, CIDR notation, Basics of IP support protocols (ARP, DHCP, ICMP), Network Address Translation (NAT); Transport layer: flow control and congestion control, UDP, TCP, sockets; Application layer protocols: DNS, SMTP, HTTP, FTP, Email.',
        subtopics: [
            'OSI and TCP/IP Protocol Stacks (Layering concepts)',
            'Packet, circuit, and virtual circuit-switching basics',
            'Data link layer: framing, error detection, MAC, Ethernet bridging',
            'Routing protocols: shortest path, flooding, distance vector, link state',
            'Fragmentation, IP addressing, IPv4, CIDR notation',
            'IP support protocols (ARP, DHCP, ICMP), NAT',
            'Transport layer: flow/congestion control, UDP, TCP, sockets',
            'Application layer protocols: DNS, SMTP, HTTP, FTP, Email'
        ],
        link: 'https://www.youtube.com/playlist?list=PLG9aCp4uE-s0xddCBjwMDnEVyc523WbA2',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLG9aCp4uE-s0xddCBjwMDnEVyc523WbA2'
    },
    // General Aptitude
    {
        id: 'aptitude-verbal',
        title: 'Verbal Aptitude',
        category: 'aptitude',
        instructor: 'Saurabh Thakur',
        source: 'Apti Xpress',
        description: 'Basic English grammar: tenses, articles, adjectives, prepositions, conjunctions, verb-noun agreement, and other parts of speech. Basic vocabulary: words, idioms, and phrases in context, reading and comprehension, Narrative sequencing.',
        subtopics: [
            'Basic English grammar (tenses, articles, adjectives, prepositions, conjunctions)',
            'Verb-noun agreement, other parts of speech',
            'Basic vocabulary: words, idioms, phrases in context',
            'Reading and comprehension',
            'Narrative sequencing'
        ],
        link: 'https://youtube.com/playlist?list=PLNEqvET0cb64A4pPR97wyMdHuZ8sN4VGr',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLNEqvET0cb64A4pPR97wyMdHuZ8sN4VGr'
    },
    {
        id: 'aptitude-quantitative',
        title: 'Quantitative Aptitude',
        category: 'aptitude',
        instructor: 'Saurabh Thakur',
        source: 'Apti Xpress',
        description: 'Data interpretation: data graphs (bar graphs, pie charts, and other graphs representing data), 2- and 3-dimensional plots, maps, and tables. Numerical computation and estimation: ratios, percentages, powers, exponents and logarithms, permutations and combinations, and series. Mensuration and geometry. Elementary statistics and probability.',
        subtopics: [
            'Data interpretation: graphs, charts, maps, and tables',
            'Numerical computation & estimation (ratios, percentages, logs, series)',
            'Permutations and combinations',
            'Mensuration and geometry',
            'Elementary statistics and probability'
        ],
        link: 'https://youtube.com/playlist?list=PLNEqvET0cb64br4B9Qa8omDAFPDP0cyQC',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLNEqvET0cb64br4B9Qa8omDAFPDP0cyQC'
    },
    {
        id: 'aptitude-analytical',
        title: 'Analytical Aptitude',
        category: 'aptitude',
        instructor: 'Saurabh Thakur',
        source: 'Apti Xpress',
        description: 'Logic: deduction and induction, Analogy, Numerical relations and reasoning.',
        subtopics: [
            'Logic: deduction and induction',
            'Analogy',
            'Numerical relations and reasoning'
        ],
        link: 'https://youtube.com/playlist?list=PLNEqvET0cb64br4B9Qa8omDAFPDP0cyQC',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLNEqvET0cb64br4B9Qa8omDAFPDP0cyQC'
    },
    {
        id: 'aptitude-spatial',
        title: 'Spatial Aptitude',
        category: 'aptitude',
        instructor: 'GATE Wallah',
        source: 'Physics Wallah',
        description: 'Transformation of shapes: translation, rotation, scaling, mirroring, assembling, and grouping paper folding, cutting, and patterns in 2 and 3 dimensions.',
        subtopics: [
            'Transformation of shapes: translation, rotation, scaling',
            'Mirroring, assembling, and grouping',
            'Paper folding, cutting, and patterns in 2 and 3 dimensions'
        ],
        link: 'https://youtube.com/playlist?list=PLvTTv60o7qj-PgF3DhvvTK6_-g_FU8wCT',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLvTTv60o7qj-PgF3DhvvTK6_-g_FU8wCT'
    },
    // Parallel Learning (Technical Skills & Tools)
    {
        id: 'skills-networking',
        title: 'Computer Networks & CCNA (Main)',
        category: 'skills',
        instructor: 'NetworkChuck',
        source: 'YouTube',
        description: 'Primary focus parallel learning: CCNA security, network components, routing protocols, subnets, IP, switching, secure architectures.',
        subtopics: [
            'Network components, routers, switches',
            'OSI & TCP/IP stack configuration',
            'IP addressing and custom subnetting',
            'Routing protocols (OSPF, RIP, Static)',
            'Network security, firewalling, and threat mitigation'
        ],
        link: 'https://youtube.com/playlist?list=PLIhvC56v6wOPQ7V4U6hWv674PZ-9WcZf6',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLIhvC56v6wOPQ7V4U6hWv674PZ-9WcZf6'
    },
    {
        id: 'skills-docker-k8s',
        title: 'Docker & Kubernetes',
        category: 'skills',
        instructor: 'TechWorld with Nana',
        source: 'YouTube',
        description: 'Containerization skills: Docker architecture, Dockerfiles, pod services, clustering, state management, deployments.',
        subtopics: [
            'Docker architecture and container lifecycles',
            'Writing Dockerfiles and multi-stage builds',
            'Kubernetes architecture, pods, and nodes',
            'Kubernetes services, deployments, and cluster management'
        ],
        link: 'https://youtube.com/playlist?list=PL4Gr5tOAPttLoy9qgECJDker2FkyrVQDg',
        embed: 'https://www.youtube.com/embed/videoseries?list=PL4Gr5tOAPttLoy9qgECJDker2FkyrVQDg'
    },
    {
        id: 'skills-backend',
        title: 'Backend Frameworks & REST APIs',
        category: 'skills',
        instructor: 'freeCodeCamp',
        source: 'YouTube',
        description: 'Spring Boot, Node.js, Express.js, Golang, OOPS concepts, Core Java (Collection framework), JavaScript, database integration with MySQL, JDBC, and SQL Workbench.',
        subtopics: [
            'Java Spring Boot framework architecture',
            'Node.js & Express REST API design',
            'Go (Golang) syntax & concurrent backends',
            'OOPS principles & Java collections',
            'Database integration: JDBC, MySQL schemas & queries'
        ],
        link: 'https://youtu.be/35EQXmHKZYs?si=u28_0Z4H4SshYk8W',
        embed: 'https://www.youtube.com/embed/35EQXmHKZYs'
    },
    {
        id: 'skills-aws-cicd',
        title: 'AWS Cloud & Model Deployments',
        category: 'skills',
        instructor: 'TechWorld with Nana',
        source: 'YouTube',
        description: 'CI/CD workflows, Git/GitHub version control, AWS EC2/S3 setups, and ML & AI model deployment pipelines.',
        subtopics: [
            'AWS console: EC2, S3, RDS configurations',
            'Git & GitHub advanced branching and workflows',
            'CI/CD pipeline construction (GitHub Actions/Jenkins)',
            'Deploying Machine Learning and AI models to cloud'
        ],
        link: 'https://youtu.be/DlTUPt4W-9E?si=DsnC95u52fWz4T3u',
        embed: 'https://www.youtube.com/embed/DlTUPt4W-9E'
    },
    {
        id: 'skills-kafka',
        title: 'Apache Kafka & Messaging',
        category: 'skills',
        instructor: 'Hussein Nasser',
        source: 'YouTube',
        description: 'Distributed event streaming, message broker mechanics, producer/consumer topics, scaling, and fault tolerance.',
        subtopics: [
            'Kafka architecture: brokers, partitions, zookeeper/KRaft',
            'Creating producers & event streams',
            'Configuring consumers & consumer groups',
            'Replication, scaling, and message durability'
        ],
        link: 'https://youtu.be/R873cAdS9B8?si=Z6W44T0D4vF3l1Fw',
        embed: 'https://www.youtube.com/embed/R873cAdS9B8'
    },
    {
        id: 'skills-security-sdlc',
        title: 'Cyber Security, Testing & SDLC',
        category: 'skills',
        instructor: 'NetworkChuck',
        source: 'YouTube',
        description: 'Cyber security essentials, root cause analysis, software testing, automation, SDLC, reporting, and workflow collaboration tools (Jira, Confluence, Slack, Power BI, Tableau).',
        subtopics: [
            'Cyber security essentials and encryption methods',
            'Debugging, testing automation, and root cause analysis',
            'Software Development Life Cycle (SDLC) models',
            'Enterprise tools integration: Jira, Confluence, Slack, Power BI, Zapier'
        ],
        link: 'https://youtube.com/playlist?list=PLIhvC56v6wONHSPvTOCmI27Xy1Mv32Q8m',
        embed: 'https://www.youtube.com/embed/videoseries?list=PLIhvC56v6wONHSPvTOCmI27Xy1Mv32Q8m'
    }
];

// App State
let activeSubjectId = null;
let currentFilter = 'all';
let searchQuery = '';
let saveTimeout = null;

// Local Storage Keys
const STORAGE_STATUS_KEY = 'gate_dashboard_statuses';
const STORAGE_NOTES_KEY = 'gate_dashboard_notes';
const STORAGE_CHECKLIST_KEY = 'gate_dashboard_checklists';

// State Initializers
let subjectStatuses = JSON.parse(localStorage.getItem(STORAGE_STATUS_KEY)) || {};
let subjectNotes = JSON.parse(localStorage.getItem(STORAGE_NOTES_KEY)) || {};
let subjectChecklists = JSON.parse(localStorage.getItem(STORAGE_CHECKLIST_KEY)) || {};

// Initialize states for all subjects
subjects.forEach(subject => {
    if (!subjectStatuses[subject.id]) {
        subjectStatuses[subject.id] = 'not-started';
    }
    if (!subjectNotes[subject.id]) {
        subjectNotes[subject.id] = '';
    }
    if (!subjectChecklists[subject.id] || subjectChecklists[subject.id].length !== subject.subtopics.length) {
        subjectChecklists[subject.id] = new Array(subject.subtopics.length).fill(false);
    }
});
saveStatuses();
saveNotesToStore();
saveChecklistsToStore();

// DOM Elements
const subjectGrid = document.getElementById('subjectGrid');
const filterGroup = document.getElementById('filterGroup');
const searchInput = document.getElementById('searchInput');
const overallCompletion = document.getElementById('overallCompletion');
const overallProgressBar = document.getElementById('overallProgressBar');
const completedCount = document.getElementById('completedCount');

// Player Elements
const playerSubjectTitle = document.getElementById('playerSubjectTitle');
const playerSubjectInstructor = document.getElementById('playerSubjectInstructor');
const videoContainer = document.getElementById('videoContainer');
const statusSelector = document.getElementById('statusSelector');
const actionRow = document.getElementById('actionRow');
const externalLink = document.getElementById('externalLink');

// Sidebar Tabs & Content Elements
const tabChecklist = document.getElementById('tabChecklist');
const tabNotes = document.getElementById('tabNotes');
const checklistContent = document.getElementById('checklistContent');
const notesContent = document.getElementById('notesContent');
const checklistPlaceholder = document.getElementById('checklistPlaceholder');
const checklistItems = document.getElementById('checklistItems');
const notesArea = document.getElementById('notesArea');
const saveIndicator = document.getElementById('saveIndicator');
const saveText = document.getElementById('saveText');

// Pomodoro Timer Elements
const timerDisplay = document.getElementById('timerDisplay');
const timerLabel = document.getElementById('timerLabel');
const timerPlayBtn = document.getElementById('timerPlayBtn');
const timerResetBtn = document.getElementById('timerResetBtn');
const playIcon = document.getElementById('playIcon');
const pauseIcon = document.getElementById('pauseIcon');

// Pomodoro State Variables
let timerSeconds = 1500; // 25 mins
let timerRunning = false;
let timerInterval = null;
let timerType = 'study'; // 'study' or 'break'

// Initialize Audio Context for Beep Notifications (no MP3 files required)
let audioCtx = null;

// Setup Application
function init() {
    renderCards();
    updateOverallProgress();
    setupEventListeners();
    setSaveStateIndicator('idle');
}

// Render cards based on filters and search
function renderCards() {
    subjectGrid.innerHTML = '';
    
    const filtered = subjects.filter(subj => {
        const matchesCategory = currentFilter === 'all' || subj.category === currentFilter;
        const matchesSearch = subj.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              subj.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              subj.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              subj.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        subjectGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
                No subjects found matching "${searchQuery}".
            </div>
        `;
        return;
    }

    filtered.forEach(subj => {
        const status = subjectStatuses[subj.id];
        const isActive = subj.id === activeSubjectId;
        
        const card = document.createElement('div');
        card.className = `subject-card ${isActive ? 'active' : ''}`;
        card.setAttribute('data-id', subj.id);
        
        card.innerHTML = `
            <div class="card-header">
                <span class="category-tag ${subj.category}">${
                    subj.category === 'maths' ? 'Maths' : 
                    subj.category === 'technical' ? 'Technical' : 
                    subj.category === 'aptitude' ? 'Aptitude' : 'Parallel Skill'
                }</span>
                <span class="status-badge ${status}" title="Status: ${formatStatusText(status)}"></span>
            </div>
            <div>
                <h3 class="card-title">${subj.title}</h3>
                <p class="card-desc">${subj.description}</p>
                <div class="instructor-info">
                    <svg class="instructor-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>${subj.instructor}</span>
                </div>
            </div>
            <div class="card-footer">
                <span class="source-badge">${subj.source}</span>
                <div class="play-action">
                    <span>Watch</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => selectSubject(subj.id));
        subjectGrid.appendChild(card);
    });
}

// Select active subject and load in player & checklist
function selectSubject(id) {
    activeSubjectId = id;
    const subject = subjects.find(s => s.id === id);
    if (!subject) return;

    // Update active visual card
    document.querySelectorAll('.subject-card').forEach(card => {
        if (card.getAttribute('data-id') === id) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    // Load subject info in player section
    playerSubjectTitle.textContent = subject.title;
    playerSubjectInstructor.textContent = `By ${subject.instructor} • ${subject.source}`;
    
    // Embed iframe
    videoContainer.innerHTML = `
        <iframe class="video-iframe" 
                src="${subject.embed}" 
                title="${subject.title}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
        </iframe>
    `;

    // Show and setup control actions
    statusSelector.style.display = 'grid';
    actionRow.style.display = 'flex';
    externalLink.href = subject.link;

    // Set active status button
    const status = subjectStatuses[id];
    updateStatusButtonsUI(status);

    // Setup notes area
    notesArea.disabled = false;
    notesArea.value = subjectNotes[id] || '';
    notesArea.placeholder = `Write notes for ${subject.title} here...`;
    
    // Setup and render syllabus checklist
    renderChecklist(id, subject);

    setSaveStateIndicator('saved');
}

// Render dynamic syllabus checklist for selected subject
function renderChecklist(id, subject) {
    checklistPlaceholder.style.display = 'none';
    checklistItems.style.display = 'flex';
    checklistItems.innerHTML = '';

    const listStates = subjectChecklists[id];

    subject.subtopics.forEach((topic, index) => {
        const isChecked = listStates[index];
        
        const item = document.createElement('div');
        item.className = `checklist-item ${isChecked ? 'checked' : ''}`;
        
        item.innerHTML = `
            <div class="checklist-checkbox"></div>
            <span class="checklist-text">${topic}</span>
        `;
        
        item.addEventListener('click', () => {
            toggleChecklistItem(id, index, item);
        });

        checklistItems.appendChild(item);
    });
}

// Toggle checkbox state, update local storage, and recalculate status
function toggleChecklistItem(subjectId, topicIndex, element) {
    const listStates = subjectChecklists[subjectId];
    listStates[topicIndex] = !listStates[topicIndex];
    saveChecklistsToStore();

    // Update checklist UI
    if (listStates[topicIndex]) {
        element.classList.add('checked');
    } else {
        element.classList.remove('checked');
    }

    // Auto-update subject status based on checked subtopics
    const total = listStates.length;
    const checkedCount = listStates.filter(Boolean).length;
    
    let newStatus = 'not-started';
    if (checkedCount === total) {
        newStatus = 'completed';
    } else if (checkedCount > 0) {
        newStatus = 'in-progress';
    }
    
    setSubjectStatus(newStatus);
}

// Update status visual selection on player
function updateStatusButtonsUI(activeStatus) {
    statusSelector.querySelectorAll('.status-opt').forEach(btn => {
        if (btn.getAttribute('data-status') === activeStatus) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Change subject status
function setSubjectStatus(status) {
    if (!activeSubjectId) return;
    
    subjectStatuses[activeSubjectId] = status;
    saveStatuses();
    
    // Update progress computations
    updateOverallProgress();
    
    // Update individual card and player status buttons
    updateStatusButtonsUI(status);
    
    // Partially re-render card layout to update badges without complete reload
    const card = document.querySelector(`.subject-card[data-id="${activeSubjectId}"]`);
    if (card) {
        const badge = card.querySelector('.status-badge');
        if (badge) {
            badge.className = `status-badge ${status}`;
            badge.title = `Status: ${formatStatusText(status)}`;
        }
    }
}

// Update Header Completion Stats
function updateOverallProgress() {
    const total = subjects.length;
    const completed = subjects.filter(s => subjectStatuses[s.id] === 'completed').length;
    const progressPercent = total > 0 ? Math.round((completed / total) * 100) : 0;
    
    overallCompletion.textContent = `${progressPercent}%`;
    overallProgressBar.style.width = `${progressPercent}%`;
    completedCount.textContent = `${completed} / ${total}`;
}

// Notes Auto-saving Logic
function handleNotesInput() {
    if (!activeSubjectId) return;
    
    setSaveStateIndicator('saving');
    
    // Clear previous save timeout
    if (saveTimeout) clearTimeout(saveTimeout);
    
    // Save to memory
    subjectNotes[activeSubjectId] = notesArea.value;
    
    // Debounce actual LocalStorage save
    saveTimeout = setTimeout(() => {
        saveNotesToStore();
        setSaveStateIndicator('saved');
    }, 800);
}

// Save helpers
function saveStatuses() {
    localStorage.setItem(STORAGE_STATUS_KEY, JSON.stringify(subjectStatuses));
}

// Save notes to store
function saveNotesToStore() {
    localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(subjectNotes));
}

// Save checklists to store
function saveChecklistsToStore() {
    localStorage.setItem(STORAGE_CHECKLIST_KEY, JSON.stringify(subjectChecklists));
}

// Save status visual indicator
function setSaveStateIndicator(state) {
    if (state === 'saving') {
        saveIndicator.style.display = 'block';
        saveIndicator.className = 'save-indicator saving';
        saveText.textContent = 'Saving...';
    } else if (state === 'saved') {
        saveIndicator.style.display = 'block';
        saveIndicator.className = 'save-indicator saved';
        saveText.textContent = 'Saved';
    } else {
        saveIndicator.style.display = 'none';
        saveText.textContent = '';
    }
}

// Helper formatting
function formatStatusText(status) {
    if (status === 'completed') return 'Completed';
    if (status === 'in-progress') return 'In Progress';
    return 'Not Started';
}

// Switch between Sidebar tabs
function switchSidebarTab(targetTab) {
    if (targetTab === 'checklist') {
        tabChecklist.classList.add('active');
        tabNotes.classList.remove('active');
        checklistContent.classList.add('active');
        notesContent.classList.remove('active');
        saveIndicator.style.display = 'none'; // Notes indicator only
    } else if (targetTab === 'notes') {
        tabNotes.classList.add('active');
        tabChecklist.classList.remove('active');
        notesContent.classList.add('active');
        checklistContent.classList.remove('active');
        if (activeSubjectId) setSaveStateIndicator('saved');
    }
}

// Pomodoro Timer Functionality
function toggleTimer() {
    if (timerRunning) {
        // Pause timer
        clearInterval(timerInterval);
        timerRunning = false;
        playIcon.style.display = 'block';
        pauseIcon.style.display = 'none';
    } else {
        // Start timer
        timerRunning = true;
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'block';
        timerInterval = setInterval(tickTimer, 1000);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerRunning = false;
    playIcon.style.display = 'block';
    pauseIcon.style.display = 'none';
    
    if (timerType === 'study') {
        timerSeconds = 1500; // 25 mins
        timerLabel.textContent = 'Study Session';
    } else {
        timerSeconds = 300; // 5 mins
        timerLabel.textContent = 'Break Time';
    }
    updateTimerDisplay();
}

function tickTimer() {
    if (timerSeconds > 0) {
        timerSeconds--;
        updateTimerDisplay();
    } else {
        // Timer completed!
        playBeepAlert();
        
        // Toggle states
        if (timerType === 'study') {
            timerType = 'break';
            timerSeconds = 300; // 5 mins
            timerLabel.textContent = 'Break Time';
            alert('Study session complete! Time to take a 5-minute break.');
        } else {
            timerType = 'study';
            timerSeconds = 1500; // 25 mins
            timerLabel.textContent = 'Study Session';
            alert('Break is over! Time to focus.');
        }
        
        toggleTimer(); // pause
        updateTimerDisplay();
    }
}

function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Web Audio API custom beep generator (highly interactive notification)
function playBeepAlert() {
    try {
        if (!audioCtx) {
            audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, audioCtx.currentTime); // High pitch A note
        gain.gain.setValueAtTime(0.5, audioCtx.currentTime);
        
        osc.start();
        
        // Stop oscillator after 0.5 seconds
        osc.stop(audioCtx.currentTime + 0.5);
    } catch (e) {
        console.error('Audio beep failed to initialize:', e);
    }
}

// Bind interactive handlers
function setupEventListeners() {
    // Search filter
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderCards();
    });

    // Category button filters
    filterGroup.addEventListener('click', (e) => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        
        filterGroup.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        currentFilter = btn.getAttribute('data-filter');
        renderCards();
    });

    // Player status trigger buttons
    statusSelector.addEventListener('click', (e) => {
        const opt = e.target.closest('.status-opt');
        if (!opt) return;
        setSubjectStatus(opt.getAttribute('data-status'));
    });

    // Text area notepad inputs
    notesArea.addEventListener('input', handleNotesInput);

    // Sidebar panel switcher tabs
    tabChecklist.addEventListener('click', () => switchSidebarTab('checklist'));
    tabNotes.addEventListener('click', () => switchSidebarTab('notes'));

    // Pomodoro Timer controls
    timerPlayBtn.addEventListener('click', toggleTimer);
    timerResetBtn.addEventListener('click', resetTimer);
}

// Start app
window.addEventListener('DOMContentLoaded', init);
