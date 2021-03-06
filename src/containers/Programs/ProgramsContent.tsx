import React from 'react';
import { Link } from 'react-router-dom';

const ProgramsContent = (): JSX.Element => (
  <main className="programs">

    <h1>Programs at Caring Child Daycare</h1>

    <p>
      At Caring Child Daycare, we offer a wide range of programs based on the needs of your children.
      Each program has been carefully designed to meet the needs of your child based on both their age, but also their personal development.
      With our programs, along with our caring teachers, your children will master the milestones typical of their age range.
    </p>

    <h2>Select a program to learn more:</h2>

    <ul>
      <li><Link to="/daycare/programs/infants-and-toddlers">Infant and Toddler – 6 weeks to 23 months</Link></li>
      <li><Link to="/daycare/programs/twos">Twos – 24 months to 36 months</Link></li>
      <li><Link to="/daycare/programs/preschool">Preschool – 3 years</Link></li>
      <li><Link to="/daycare/programs/private-pre-k">Private Pre-K – 4 year olds</Link></li>
      <li><Link to="/daycare/programs/after-school">After School – 5 years to 12 years</Link></li>
      <li><Link to="/daycare/programs/summer-camp">Summer Camp – 6 years to 12 years</Link></li>
    </ul>
  </main>
);

export default ProgramsContent;
