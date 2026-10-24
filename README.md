const form = document.getElementById('trip-form');
const output = document.getElementById('output');

const destinationMap = {
  heritage: {
    title: 'Heritage & Culture Circuit',
    highlights: ['Hampi ruins', 'Mysuru palace', 'Badami caves', 'Aihole heritage walk'],
    experience: 'Dive into Karnataka’s royal history, temple architecture, and grand cultural heritage.'
  },
  nature: {
    title: 'Nature & Scenic Escape',
    highlights: ['Coorg coffee estates', 'Abbey Falls', 'Chikmagalur hills', 'Brahmagiri viewpoints'],
    experience: 'Enjoy misty hills, lush landscapes, and refreshing nature trails across the Western Ghats.'
  },
  wildlife: {
    title: 'Wildlife Safari Route',
    highlights: ['Bandipur safari', 'Nagarhole forest drive', 'Kabini river cruise', 'Elephant sightings'],
    experience: 'Explore Karnataka’s rich biodiversity through safaris and forest stays.'
  },
  beach: {
    title: 'Beach & Coastal Retreat',
    highlights: ['Gokarna beaches', 'Om Beach', 'Murudeshwar temple', 'Udupi coast'],
    experience: 'Blend beach relaxation with temple visits and delicious coastal cuisine.'
  },
  food: {
    title: 'Foodie Karnataka Trail',
    highlights: ['Mysuru dosas', 'Udupi meals', 'Bisi Bele Bath', 'Coorg coffee tasting'],
    experience: 'Follow a culinary journey packed with iconic local flavours and regional specialties.'
  },
  adventure: {
    title: 'Adventure & Trekking Loop',
    highlights: ['Tadiandamol trek', 'Kemmanagundi viewpoints', 'River rafting', 'Zipline experience'],
    experience: 'Enjoy scenic treks, adrenaline activities, and memorable outdoor thrills.'
  },
  wellness: {
    title: 'Spiritual Wellness Journey',
    highlights: ['Dharmasthala', 'Gokarna beach yoga', 'Sringeri spiritual visit', 'Ayurvedic spa stay'],
    experience: 'Balance relaxation, temple visits, and rejuvenating wellness experiences.'
  }
};

function generateItinerary(event) {
  event.preventDefault();

  const travelerName = document.getElementById('travelerName').value.trim() || 'Traveller';
  const days = Number(document.getElementById('days').value);
  const budget = document.getElementById('budget').value;
  const interests = document.getElementById('interests').value;
  const season = document.getElementById('season').value;
  const style = document.getElementById('style').value;

  const route = destinationMap[interests] || destinationMap.heritage;
  const budgetText = {
    'budget-friendly': 'comfortable and value-focused stays',
    'mid-range': 'balanced premium comfort with local charm',
    luxury: 'luxury stays and curated experiences'
  }[budget];

  const dayPlan = buildDayPlan(days, route.highlights, style, season);

  const itineraryHtml = `
    <div class="trip-header">
      <h3>${travelerName}'s Karnataka plan</h3>
      <span class="trip-tag">${route.title}</span>
    </div>

    <div class="trip-grid">
      ${dayPlan
        .map(
          (day) => `
            <article class="plan-card">
              <h4>${day.title}</h4>
              <ul>
                ${day.items.map((item) => `<li>${item}</li>`).join('')}
              </ul>
            </article>
          `
        )
        .join('')}
    </div>

    <div class="trip-summary">
      <strong>Ideal for:</strong> ${style} travel in ${season} season.<br />
      <strong>Budget:</strong> ${budgetText}.<br />
      <strong>Experience:</strong> ${route.experience}<br />
      <strong>Trip focus:</strong> ${route.highlights.join(', ')}.
    </div>
  `;

  output.innerHTML = itineraryHtml;
}

function buildDayPlan(days, highlights, style, season) {
  const cityFlow = [
    'Arrival and check-in',
    'Local sightseeing',
    'Food trail and evening walk',
    'Nature or heritage exploration',
    'Market visit and cultural experience',
    'Relaxed day trip',
    'Sunset viewpoint and shopping',
    'Departure day'
  ];

  const activities = [
    'Start with a scenic breakfast and local café stop',
    'Visit the region’s signature landmarks and photo spots',
    'Enjoy a guided cultural or heritage experience',
    'Take a nature walk, safari, or scenic drive',
    'Sample famous regional dishes',
    'Spend time at a viewpoint or heritage square',
    'End with a relaxed evening by the coast, hills, or palace grounds'
  ];

  const plan = [];

  for (let index = 1; index <= Math.min(days, 7); index += 1) {
    const mainHighlight = highlights[index % highlights.length];
    const cards = [
      `${cityFlow[index % cityFlow.length]} in the ${mainHighlight}`,
      `${activities[index % activities.length]}`,
      `${style === 'family' ? 'Family-friendly stop with comfort and easy pacing' : style === 'couple' ? 'Romantic or relaxed experience for two' : style === 'solo' ? 'Flexible solo exploration and self-paced discovery' : 'Shared adventure with friends and fun activities'}`,
      `${season === 'monsoon' ? 'Take advantage of greenery, waterfalls, and cool weather' : season === 'summer' ? 'Enjoy early morning outings and shaded scenic stops' : season === 'winter' ? 'Perfect for sightseeing and valley views' : 'Great for smooth travel and mild weather'}`
    ];

    plan.push({
      title: `Day ${index}`,
      items: cards
    });
  }

  return plan;
}

form.addEventListener('submit', generateItinerary);

const defaultTrip = {
  travelerName: 'Aarav',
  days: '5',
  budget: 'mid-range',
  interests: 'nature',
  season: 'monsoon',
  style: 'friends'
};

document.getElementById('travelerName').value = defaultTrip.travelerName;
document.getElementById('days').value = defaultTrip.days;
document.getElementById('budget').value = defaultTrip.budget;
document.getElementById('interests').value = defaultTrip.interests;
document.getElementById('season').value = defaultTrip.season;
document.getElementById('style').value = defaultTrip.style;

generateItinerary({ preventDefault() {} });
