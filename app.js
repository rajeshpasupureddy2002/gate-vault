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
        link: 'https://youtu.be/DrCeIbpfuzE?si=K6Mb5_COrYCLHo3Z',
        embed: 'https://www.youtube.com/embed/DrCeIbpfuzE'
    },
    {
        id: 'maths-calculus',
        title: 'Calculus',
        category: 'maths',
        instructor: 'Dr. GP Sir',
        source: 'YouTube',
        description: 'Limits, continuity and differentiability, Maxima and minima, Mean value theorem, Integration.',
        link: 'https://youtu.be/0oaxIzXQB2E?si=UlbLMsVvS4hxklaR',
        embed: 'https://www.youtube.com/embed/0oaxIzXQB2E'
    },
    {
        id: 'maths-probability',
        title: 'Probability and Statistics',
        category: 'maths',
        instructor: 'Dr. GP Sir',
        source: 'YouTube',
        description: 'Random variables, Uniform, normal, exponential, Poisson and binomial distributions. Mean, median, mode and standard deviation. Conditional probability and Bayes theorem.',
        link: 'https://youtu.be/qNGDD_Rh8ps?si=ff4VAyKlLxdeTN1O',
        embed: 'https://www.youtube.com/embed/qNGDD_Rh8ps'
    },
    // Technical Part
    {
        id: 'tech-digital-logic',
        title: 'Digital Logic',
        category: 'technical',
        instructor: 'GFG',
        source: 'GeeksforGeeks',
        description: 'Boolean algebra. Combinational and sequential circuits. Minimization. Number representations and computer arithmetic (fixed and floating point).',
        link: 'https://www.youtube.com/live/t4jKBFuFZGA?si=bH5jm1TOfOnc1Azy',
        embed: 'https://www.youtube.com/embed/t4jKBFuFZGA'
    },
    {
        id: 'tech-coa',
        title: 'Computer Organization & Architecture',
        category: 'technical',
        instructor: 'Bharat Acharya Sir',
        source: 'YouTube',
        description: 'Machine instructions and addressing modes. ALU, data‐path and control unit. Instruction pipelining, pipeline hazards. Memory hierarchy: cache, main memory and secondary storage; I/O interface (interrupt and DMA mode).',
        link: 'https://www.youtube.com/live/ZsXArRJewYo?si=KIRk-6tAhG15hULG',
        embed: 'https://www.youtube.com/embed/ZsXArRJewYo'
    },
    {
        id: 'tech-programming-ds',
        title: 'Programming & Data Structures',
        category: 'technical',
        instructor: 'Vishvadeep Gothi',
        source: 'YouTube',
        description: 'Programming in C. Recursion. Arrays, stacks, queues, linked lists, trees, binary search trees, binary heaps, graphs.',
        link: 'https://www.youtube.com/live/QBrDsG3MTkw?si=T9D3i1mOjAzT5z7d',
        embed: 'https://www.youtube.com/embed/QBrDsG3MTkw'
    },
    {
        id: 'tech-algorithms',
        title: 'Algorithms',
        category: 'technical',
        instructor: 'Dr. Khaleel Khan',
        source: 'YouTube',
        description: 'Searching, sorting, hashing. Asymptotic worst case time and space complexity. Algorithm design techniques: greedy, dynamic programming and divide‐and‐conquer. Graph traversals, minimum spanning trees, shortest paths.',
        link: 'https://www.youtube.com/live/Z5wuGWZR9d0?si=Tk8o6EGXdGqgRqOc',
        embed: 'https://www.youtube.com/embed/Z5wuGWZR9d0'
    },
    {
        id: 'tech-toc',
        title: 'Theory of Computation (TOC)',
        category: 'technical',
        instructor: 'Ankit Doyal',
        source: 'YouTube',
        description: 'Regular expressions and finite automata. Context-free grammars and push-down automata. Regular and context-free languages, pumping lemma. Turing machines and undecidability.',
        link: 'https://www.youtube.com/live/I60z8_pVWiI?si=hZUhXf3kLmn625xx',
        embed: 'https://www.youtube.com/embed/I60z8_pVWiI'
    },
    {
        id: 'tech-compiler-design',
        title: 'Compiler Design (CD)',
        category: 'technical',
        instructor: 'Deva Sir',
        source: 'YouTube',
        description: 'Lexical analysis, parsing, syntax-directed translation. Runtime environments. Intermediate code generation. Local optimization, Data flow analyses: constant propagation, liveness analysis, common sub expression elimination.',
        link: 'https://www.youtube.com/live/uGuq6TYPmZ4?si=oeuX0ReNxc_EUVlu',
        embed: 'https://www.youtube.com/embed/uGuq6TYPmZ4'
    },
    {
        id: 'tech-operating-systems',
        title: 'Operating System (OS)',
        category: 'technical',
        instructor: 'Dr. Khaleel Khan',
        source: 'YouTube',
        description: 'System calls, processes, threads, inter‐process communication, concurrency and synchronization. Deadlock. CPU and I/O scheduling. Memory management and virtual memory. File systems.',
        link: 'https://www.youtube.com/live/a3YDvmKbGrA?si=zLFVqbednUC0tdx6',
        embed: 'https://www.youtube.com/embed/a3YDvmKbGrA'
    },
    {
        id: 'tech-databases',
        title: 'Databases (DB)',
        category: 'technical',
        instructor: 'Vishvadeep Gothi',
        source: 'YouTube',
        description: 'ER‐model. Relational model: relational algebra, tuple calculus, SQL. Integrity constraints, normal forms. File organization, indexing (e.g., B and B+ trees). Transactions and concurrency control.',
        link: 'https://www.youtube.com/live/khKoJUpcXUE?si=QYMTceVP7f4AZ5IK',
        embed: 'https://www.youtube.com/embed/khKoJUpcXUE'
    },
    {
        id: 'tech-networks',
        title: 'Computer Networks (CN)',
        category: 'technical',
        instructor: 'Ankit Doyal',
        source: 'YouTube',
        description: 'Concept of layering: OSI and TCP/IP Protocol Stacks; Basics of packet, circuit and virtual circuit-switching; Data link layer: framing, error detection, Medium Access Control, Ethernet bridging; Routing protocols: shortest path, flooding, distance vector and link state routing; Fragmentation and IP addressing, IPv4, CIDR notation, Basics of IP support protocols (ARP, DHCP, ICMP), Network Address Translation (NAT); Transport layer: flow control and congestion control, UDP, TCP, sockets; Application layer protocols: DNS, SMTP, HTTP, FTP, Email.',
        link: 'https://www.youtube.com/live/3SbtNuK5YZ8?si=y1FNi80x7nbTEDwV',
        embed: 'https://www.youtube.com/live/3SbtNuK5YZ8'
    },
    // General Aptitude
    {
        id: 'aptitude-verbal',
        title: 'Verbal Aptitude',
        category: 'aptitude',
        instructor: 'Saurabh Thakur',
        source: 'Apti Xpress',
        description: 'Basic English grammar: tenses, articles, adjectives, prepositions, conjunctions, verb-noun agreement, and other parts of speech. Basic vocabulary: words, idioms, and phrases in context, reading and comprehension, Narrative sequencing.',
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

// State Initializers
let subjectStatuses = JSON.parse(localStorage.getItem(STORAGE_STATUS_KEY)) || {};
let subjectNotes = JSON.parse(localStorage.getItem(STORAGE_NOTES_KEY)) || {};

// Initialize statuses for new subjects
subjects.forEach(subject => {
    if (!subjectStatuses[subject.id]) {
        subjectStatuses[subject.id] = 'not-started';
    }
    if (!subjectNotes[subject.id]) {
        subjectNotes[subject.id] = '';
    }
});
saveStatuses();
saveNotesToStore();

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

// Notepad Elements
const notesArea = document.getElementById('notesArea');
const saveIndicator = document.getElementById('saveIndicator');
const saveText = document.getElementById('saveText');

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

// Select active subject and load in player
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
    setSaveStateIndicator('saved');
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

function saveNotesToStore() {
    localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(subjectNotes));
}

// Save status visual indicator
function setSaveStateIndicator(state) {
    if (state === 'saving') {
        saveIndicator.className = 'save-indicator saving';
        saveText.textContent = 'Saving...';
    } else if (state === 'saved') {
        saveIndicator.className = 'save-indicator saved';
        saveText.textContent = 'Saved';
    } else {
        saveIndicator.className = 'save-indicator';
        saveText.textContent = '';
    }
}

// Helper formatting
function formatStatusText(status) {
    if (status === 'completed') return 'Completed';
    if (status === 'in-progress') return 'In Progress';
    return 'Not Started';
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
}

// Start app
window.addEventListener('DOMContentLoaded', init);
