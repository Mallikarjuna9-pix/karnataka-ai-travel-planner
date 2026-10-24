:root {
  --bg: #fffaf3;
  --panel: #ffffff;
  --panel-soft: #f4efe8;
  --primary: #1f7a5a;
  --primary-dark: #155541;
  --accent: #f59f00;
  --text: #1f2a37;
  --muted: #5f6d7a;
  --border: rgba(31, 42, 55, 0.08);
  --shadow: 0 18px 45px rgba(31, 60, 49, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #fffaf2 0%, #f8f4ee 40%, #ffffff 100%);
  color: var(--text);
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(12px);
  background: rgba(255, 250, 243, 0.8);
  border-bottom: 1px solid var(--border);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), #2ca678);
  color: #fff;
}

nav {
  display: flex;
  align-items: center;
  gap: 24px;
  color: var(--muted);
  font-weight: 600;
}

.hero {
  padding: 72px 0 40px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 42px;
  align-items: center;
}

.eyebrow {
  margin: 0 0 14px;
  color: var(--primary);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(2.5rem, 4vw, 4.4rem);
  line-height: 1.04;
  letter-spacing: -0.06em;
}

.lead {
  margin: 18px 0 0;
  max-width: 590px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.7;
}

.hero-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 24px;
}

.hero-badges span {
  display: inline-flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(31, 122, 90, 0.08);
  color: var(--primary-dark);
  font-size: 0.9rem;
  font-weight: 700;
}

.planner-card {
  background: rgba(255, 255, 255, 0.86);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 24px;
}

form {
  display: grid;
  gap: 18px;
}

.field-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.field-group {
  display: grid;
  gap: 8px;
}

label {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--text);
}

input,
select,
button {
  font: inherit;
}

input,
select {
  width: 100%;
  min-height: 48px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid rgba(31, 42, 55, 0.12);
  background: var(--panel);
  color: var(--text);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
select:focus {
  outline: none;
  border-color: rgba(31, 122, 90, 0.8);
  box-shadow: 0 0 0 4px rgba(31, 122, 90, 0.08);
}

.primary-btn {
  border: 0;
  border-radius: 12px;
  min-height: 52px;
  background: linear-gradient(135deg, var(--primary) 0%, #2e9e72 100%);
  color: white;
  cursor: pointer;
  font-weight: 800;
  letter-spacing: 0.01em;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 14px 24px rgba(31, 122, 90, 0.25);
}

.primary-btn:hover {
  transform: translateY(-1px);
}

.highlights,
.itinerary-section {
  padding: 36px 0 72px;
}

.section-heading {
  margin-bottom: 30px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(1.9rem, 3vw, 2.7rem);
  letter-spacing: -0.05em;
}

.section-heading.left {
  text-align: left;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.feature-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 24px 20px;
  box-shadow: 0 10px 25px rgba(15, 26, 25, 0.04);
}

.icon {
  font-size: 2rem;
  margin-bottom: 14px;
}

.feature-card h3 {
  margin: 0 0 10px;
  font-size: 1.2rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.output-card {
  background: linear-gradient(180deg, #ffffff 0%, #fbf9f5 100%);
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 28px;
}

.placeholder-box {
  min-height: 160px;
  display: grid;
  place-items: center;
  text-align: center;
  border: 1.5px dashed rgba(31, 122, 90, 0.2);
  border-radius: 18px;
  background: rgba(31, 122, 90, 0.02);
  padding: 24px;
}

.placeholder-box h3 {
  margin: 0 0 8px;
}

.placeholder-box p {
  margin: 0;
  color: var(--muted);
  max-width: 620px;
  line-height: 1.6;
}

.trip-header {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--border);
  margin-bottom: 22px;
}

.trip-header h3 {
  margin: 0;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
  letter-spacing: -0.05em;
}

.trip-tag {
  display: inline-flex;
  align-items: center;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(31, 122, 90, 0.08);
  color: var(--primary-dark);
  font-size: 0.82rem;
  font-weight: 700;
}

.trip-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.plan-card {
  background: var(--panel-soft);
  border: 1px solid rgba(31, 42, 55, 0.06);
  border-radius: 18px;
  padding: 18px 18px 16px;
}

.plan-card h4 {
  margin: 0 0 12px;
  font-size: 1.08rem;
}

.plan-card ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.8;
}

.trip-summary {
  margin-top: 22px;
  padding: 18px 20px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(245, 159, 0, 0.12), rgba(31, 122, 90, 0.08));
  border: 1px solid rgba(245, 159, 0, 0.2);
  color: var(--text);
  line-height: 1.8;
}

.trip-summary strong {
  color: var(--primary-dark);
}

.footer {
  border-top: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.7);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  min-height: 72px;
  color: var(--muted);
  font-size: 0.95rem;
}

@media (max-width: 860px) {
  .hero-grid,
  .feature-grid,
  .trip-grid {
    grid-template-columns: 1fr;
  }

  .nav {
    flex-direction: column;
    justify-content: center;
    padding: 18px 0;
    gap: 14px;
  }

  nav {
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .trip-header,
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 520px) {
  .field-row {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 46px;
  }

  .planner-card,
  .output-card {
    padding: 18px;
  }
}
