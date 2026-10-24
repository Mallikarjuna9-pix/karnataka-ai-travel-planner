:root {
  --bg: #f7f4ef;
  --panel: rgba(255, 255, 255, 0.82);
  --panel-strong: #ffffff;
  --primary: #1d6d4d;
  --primary-strong: #114f3b;
  --secondary: #f5a623;
  --text: #162129;
  --muted: #536170;
  --border: rgba(15, 21, 30, 0.08);
  --shadow: 0 28px 60px rgba(12, 32, 24, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: linear-gradient(180deg, #f5f1ea 0%, #f9f7f4 35%, #ffffff 100%);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
select {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

#root {
  min-height: 100vh;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(247, 244, 239, 0.78);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(22, 33, 41, 0.05);
}

.nav-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
}

.brand-wrap {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-weight: 800;
  letter-spacing: -0.04em;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #38a071);
  color: white;
  box-shadow: 0 10px 25px rgba(29, 109, 77, 0.25);
}

.main-nav {
  display: flex;
  gap: 24px;
  color: var(--muted);
  font-weight: 600;
}

.hero-section {
  position: relative;
  padding: 72px 0 48px;
  overflow: hidden;
}

.hero-backdrop {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(120deg, rgba(14, 37, 28, 0.75), rgba(14, 32, 28, 0.55)),
    url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80') center/cover no-repeat;
  transform: scale(1.08);
}

.hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 32px;
  align-items: center;
}

.hero-copy {
  padding: 36px 0 18px;
  color: #fefefe;
}

.eyebrow {
  margin: 0 0 16px;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  font-weight: 800;
  text-transform: uppercase;
  color: #d5f5e5;
}

.eyebrow.secondary {
  color: var(--primary);
}

.hero-copy h1 {
  margin: 0;
  max-width: 620px;
  font-size: clamp(2.5rem, 4vw, 4.7rem);
  line-height: 1.03;
  letter-spacing: -0.06em;
}

.lead {
  margin: 20px 0 0;
  max-width: 570px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  font-size: 1.08rem;
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.badge-row span {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 7px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
}

.planner-panel {
  background: rgba(255, 255, 255, 0.84);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 25px 22px;
  backdrop-filter: blur(14px);
}

.field-group {
  display: grid;
  gap: 8px;
  margin-bottom: 18px;
}

.field-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

label {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text);
}

input,
select {
  width: 100%;
  min-height: 50px;
  border: 1px solid rgba(17, 31, 25, 0.12);
  border-radius: 12px;
  padding: 12px 14px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--text);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
select:focus {
  outline: none;
  border-color: rgba(29, 109, 77, 0.8);
  box-shadow: 0 0 0 4px rgba(29, 109, 77, 0.08);
}

.primary-button,
.text-button,
.chat-form button {
  border: 0;
  cursor: pointer;
  font-weight: 700;
}

.primary-button {
  width: 100%;
  min-height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--primary), #2c9f73);
  color: white;
  box-shadow: 0 16px 28px rgba(29, 109, 77, 0.25);
}

.destination-section,
.itinerary-section {
  padding: 52px 0 72px;
}

.section-heading {
  margin-bottom: 28px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.06em;
}

.destination-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.destination-card {
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 22px;
  background: var(--panel-strong);
  box-shadow: 0 16px 28px rgba(20, 34, 33, 0.06);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.destination-card:hover,
.destination-card.active {
  transform: translateY(-4px);
  box-shadow: 0 24px 38px rgba(20, 34, 33, 0.1);
}

.destination-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.destination-body {
  padding: 18px 18px 20px;
}

.destination-region {
  margin: 0 0 8px;
  color: var(--primary);
  font-size: 0.74rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.destination-body h3 {
  margin: 0 0 8px;
  font-size: 1.5rem;
  letter-spacing: -0.04em;
}

.destination-body p {
  margin: 0;
  color: var(--muted);
  line-height: 1.75;
}

.text-button {
  margin-top: 16px;
  padding: 0;
  background: transparent;
  color: var(--primary);
  font-weight: 700;
}

.itinerary-layout {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.9fr);
  gap: 22px;
}

.itinerary-panel,
.chat-panel {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid var(--border);
  border-radius: 28px;
  box-shadow: 0 18px 32px rgba(10, 22, 18, 0.05);
}

.itinerary-panel {
  padding: 26px;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.panel-header h2 {
  margin: 0;
  font-size: clamp(1.9rem, 2vw, 2.7rem);
  letter-spacing: -0.06em;
}

.pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(29, 109, 77, 0.08);
  color: var(--primary-strong);
  font-weight: 700;
  font-size: 0.82rem;
}

.summary-copy {
  margin: 0 0 20px;
  color: var(--muted);
  line-height: 1.8;
  font-size: 1rem;
}

.trip-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
}

.trip-meta span {
  display: inline-flex;
  align-items: center;
  min-height: 38px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(245, 166, 35, 0.1);
  color: #7d4e00;
  font-weight: 600;
  font-size: 0.84rem;
}

.day-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.day-card {
  padding: 18px 18px 12px;
  border-radius: 18px;
  background: linear-gradient(180deg, #f9f4ef 0%, #fff 100%);
  border: 1px solid rgba(15, 21, 30, 0.06);
}

.day-card h3 {
  margin: 0 0 14px;
  font-size: 1.18rem;
}

.day-card ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.8;
}

.chat-panel {
  display: flex;
  flex-direction: column;
  min-height: 600px;
  overflow: hidden;
}

.chat-header {
  padding: 22px 22px 18px;
  border-bottom: 1px solid var(--border);
}

.chat-header h3 {
  margin: 0;
  font-size: 1.5rem;
  letter-spacing: -0.04em;
}

.chat-thread {
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  padding: 20px 18px;
  background: linear-gradient(180deg, rgba(29, 109, 77, 0.03), rgba(255, 255, 255, 0.4));
}

.chat-bubble {
  max-width: 92%;
  padding: 12px 14px;
  border-radius: 16px;
  line-height: 1.65;
  font-size: 0.95rem;
  box-shadow: 0 10px 24px rgba(16, 32, 38, 0.04);
}

.chat-bubble.assistant {
  align-self: flex-start;
  background: #edf8f2;
  color: var(--text);
}

.chat-bubble.user {
  align-self: flex-end;
  background: linear-gradient(135deg, var(--primary), #347e62);
  color: white;
}

.chat-bubble p {
  margin: 0;
}

.chat-form {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  padding: 18px;
  border-top: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.72);
}

.chat-form input {
  min-height: 46px;
}

.chat-form button {
  min-width: 90px;
  min-height: 46px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #2d9b72);
  color: white;
}

.footer {
  border-top: 1px solid rgba(22, 33, 41, 0.06);
  background: rgba(255, 255, 255, 0.78);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  min-height: 72px;
  color: var(--muted);
}

@media (max-width: 960px) {
  .hero-grid,
  .itinerary-layout,
  .destination-grid,
  .day-grid {
    grid-template-columns: 1fr;
  }

  .nav-bar {
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    padding: 18px 0;
  }

  .main-nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-inner,
  .panel-header {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 560px) {
  .field-row {
    grid-template-columns: 1fr;
  }

  .planner-panel,
  .itinerary-panel,
  .chat-panel {
    padding-left: 16px;
    padding-right: 16px;
  }

  .hero-section {
    padding-top: 46px;
  }
}
