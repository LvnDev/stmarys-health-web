import "./home.css";

function Home() {
  return (
    <>
      <div className="main-top">
        <h1>General Health</h1>
        <p>
        General health and wellness encompass a wide range of
          factors that contribute to your overall well-being.
          It's not just about the absence of disease, but rather a
          state of complete physical, mental, and social well-being.
          Here's a breakdown of key areas
        </p>
      </div>

      <div className="main-bot">


        <div className="health-section">
          <div className="text-column">
            <h2>1. Physical Health</h2>
            <ul>
              <li><strong>Balanced Diet:</strong> Focus on whole,
                  unprocessed foods like fruits, vegetables,
                  lean proteins, and whole grains. Limit processed foods,
                  sugary drinks, and excessive unhealthy fats.
              </li>
              <li>
                  <strong>Regular Exercise:</strong> Aim for at least 150 minutes
                  of moderate-intensity or 75 minutes of vigorous-intensity
                  aerobic activity per week, plus muscle-strengthening activities
                  at least two days a week. Find activities you enjoy to make it
                  sustainable.
              </li>
              <li>
                 <strong>Hydration:</strong> Drink plenty of water throughout the day.
                  Pay attention to your thirst cues.
              </li>
              <li>
                  <strong>Avoid Harmful Substances: </strong>Limit or avoid alcohol
                  consumption, and do not smoke or use illegal drugs.
              </li>
              <li>
                  <strong>Adequate Sleep:</strong> Most adults need 7-9 hours of quality sleep
                  per night. Establish a regular sleep schedule and create a
                  relaxing bedtime routine.
              </li>
            </ul>
          </div>
          <div className="image-column">
            <img src="https://img.freepik.com/premium-vector/health-fitness-cartoon_24640-25689.jpg?w=740" alt="Physical Health" />
          </div>
        </div>

        <div className="health-section">
          <div className="text-column">
            <h2>2. Mental & Emotional Health</h2>
            <ul>
          <li>
            <strong>Stress Management:</strong>
              Learn healthy coping mechanisms for stress,
              such as exercise, meditation, spending time in nature,
              or pursuing hobbies.
          </li>
          <li>
              <strong>Mindfulness and Relaxation:</strong>
              Practice techniques like deep breathing,
              meditation, or yoga to promote relaxation and
              reduce anxiety.
          </li>
          <li>
              <strong>Positive Self-Talk:</strong> Cultivate a positive and
              optimistic outlook. Challenge negative thoughts.
          </li>
          <li>
              <strong>Seek Support:</strong> Don't hesitate to reach out to friends,
              family, or a mental health professional if you're struggling.
              Therapy and counseling can be very beneficial.
          </li>
        </ul>
          </div>
          <div className="image-column">
            <img src="https://img.freepik.com/free-vector/gaslighting-abstract-concept-vector-illustration-psychological-manipulation-method-mental-destabilization-cognitive-dissonance-creation-changing-beliefs-contradiction-abstract-metaphor_335657-4220.jpg?t=st=1745366599~exp=1745370199~hmac=4acf46520bf0210468ae08435654e59bc38842246086718aab7305f86d53050f&w=740" alt="Mental Health" />
          </div>
        </div>

        <div className="health-section">
          <div className="text-column">
            <h2>3. Social Health</h2>
            <ul>
          <li><strong>Strong Relationships:</strong> Nurture
              meaningful connections with family and
              friends. Social support is crucial for well-being.
          </li>
          <li>
              <strong>Community Involvement:</strong> Engage in your community
              through volunteering, joining clubs, or participating
              in social activities.
          </li>
          <li>
              <strong>Healthy Communication:</strong>
              Practice effective and respectful
              communication in your relationships.
          </li>
          <li>
              <strong>Set Boundaries:</strong>
              Learn to say no and protect your
              time and energy.
          </li>
        </ul>
          </div>
          <div className="image-column">
            <img src="https://img.freepik.com/free-vector/family-protection-concept-illustration_114360-25300.jpg?t=st=1745366659~exp=1745370259~hmac=1f09b722419dbcab7a3ac60cf0e23fb93d500cae88a1e3f412570e8f172329b2&w=740" alt="Social Health" />
          </div>
        </div>
        <div className="health-section">
        <h2>Key Principles for General Health and Wellness</h2>
        <ul>
          <li>Holistic Approach:
              Recognize that all aspects of
              your health are interconnected.
          </li>
          <li>
              Prevention is Key: Focus on
              proactive strategies to maintain
              health and prevent illness.
          </li>
          <li>
              Individualized Needs: What works for
              one person may not work for another.
              Pay attention to your own body and needs.
          </li>
          <li>
              Consistency over Perfection: Small, sustainable
              changes are more effective than drastic,
              short-lived efforts.
          </li>
          <li>Lifelong Journey:
              Health and wellness is
              an ongoing process, not
              a destination.
          </li>
        </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
    