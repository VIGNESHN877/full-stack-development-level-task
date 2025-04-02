import { useState } from 'react';

function ToggleContent() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      {isVisible && <p>SNS Design Thinking - Skill and Career Development Pillar plays an integral role in creating the illustrious placement training record of our institutions. We SCD further facilitate training activities of the students and makes sure they get placed in their dream companies. The official training partner of our institution is FACE.

FACE- as a skill-development company, help students master the skills required to land their dream careers.

Final Years: (SNSCE & CT)
FACE had trained the students’ in general verbal, quantitative and reasoning ability along
 with the coding languages such as C, C++, JAVA & PYTHON. In addition to this, 
 the strong foundation on data structure concepts. We are proud to announce that we have 
 final years’ as beneficiaries in the (2022 pass out) who got trained and placed in the
  Reputed/Day-1 placement drives. And the list extends to almost 90% of students who had enrolled
   for this year (2023) placement training sessions by the FACE. </p>}
    </div>
  );
}

export default ToggleContent;