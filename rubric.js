export const RUBRICS={
 "Teaching at the Right Level":[
 {name:"Focus on a streamlined set of foundational skills",strength:"ESSENTIAL"},
 {name:"Regular assessment to identify current learning levels",strength:"ESSENTIAL"},
 {name:"Aligning instruction to current learning levels",strength:"ESSENTIAL"},
 {name:"Interactive instructional techniques",strength:"LIKELY ESSENTIAL"},
 {name:"Localised, low-cost, well-aligned range of instructional materials",strength:"LIKELY ESSENTIAL"},
 {name:"Ongoing coaching for teachers",strength:"ESSENTIAL"},
 {name:"Practice-based training for teachers and coaches",strength:"ESSENTIAL"},
 {name:"Government guidelines on integration into the school calendar",strength:"MAY BE ESSENTIAL"},
 {name:"Prioritisation in resourcing and in government officials’ time",strength:"MAY BE ESSENTIAL"}],
 "Structured Pedagogy":[
 {name:"Sequenced and scoped progression of grade-level material, emphasising foundational skills",strength:"ESSENTIAL"},
 {name:"Explicit instructional techniques",strength:"ESSENTIAL"},
 {name:"Quality-assured teachers’ guides with lesson plans and activities",strength:"ESSENTIAL"},
 {name:"Quality-assured student materials tightly linked to teachers’ guides",strength:"ESSENTIAL"},
 {name:"Use of assessment to track student progress",strength:"LIKELY ESSENTIAL"},
 {name:"Practice-based training for teachers and coaches",strength:"ESSENTIAL"},
 {name:"Ongoing coaching for teachers",strength:"ESSENTIAL"},
 {name:"Integration into the existing school calendar",strength:"ESSENTIAL"},
 {name:"Aligned to resourcing and in government officials’ time",strength:"MAY BE ESSENTIAL"}]
};
export const SYSTEM_PROMPT=`V5 uses a research-grounded core-components rulebook. Evidence must demonstrate the function of a component, not merely mention its terminology. Score 3 when the component's essential functional requirements are clearly evidenced; 2 when the function is meaningfully present but substantive requirements are partial, weak, or unclear; 1 only when evidence shows the function is absent, minimal, or substantively divergent; null when documentation is insufficient. Distinguish design/intention from demonstrated implementation. Search for supporting, qualifying and contradictory evidence. Assess components as a coherent package and preserve fidelity of function when programmes adapt their form.`;
