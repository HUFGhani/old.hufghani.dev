enum Tag {
  WORK = `work`,
  EDUCATION = `education`,
}
enum Colour {
  workColour = `#736CED`,
  educationColour = `#018f69`,
}

export const TimelineData = [
  {
    text: `Start at my first job which was at Mcdonald's`,
    date: `August 30 2009`,
    category: {
      tag: Tag.WORK,
      color: Colour.workColour,
    },
  },
  {
    text: `Left High School`,
    date: `August 27 2009`,
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Started college at The Manchester Collage and did a BTEC Level 2 in IT Course`,
    date: `September 2 2009`,
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Completed Level 2 in IT Course`,
    date: `June 10 2010`,
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Stayed at The Manchester Collage and did a BTEC Level 3 in National Dip in IT (Software Development) & Resit English & Maths GCSE`,
    date: `September 6 2010`,
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Completed BTEC Level 3 in National Dip in IT (Software Development) Course`,
    date: `June 10 2010`,
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Promoted Crew trainer a McDonald's`,
    date: `July 10 2012`,
    category: {
      tag: Tag.WORK,
      color: Colour.workColour,
    },
  },
  {
    text: `Stayed at The Manchester Collage and did a Foundation degree Within Computing with Database Development Accredited by Salford University`,
    date: `September 20 2012`,
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Started Working at Maplin`,
    date: `April 14 2014`,
    category: {
      tag: Tag.WORK,
      color: Colour.workColour,
    },
  },
  {
    text: `Left Mcdonald's`,
    date: `August 30 2014`,
    category: {
      tag: Tag.WORK,
      color: Colour.workColour,
    },
  },
  {
    text: `Left Maplin`,
    date: `June 30 2015`,
    category: {
      tag: Tag.WORK,
      color: Colour.workColour,
    },
  },
]

export default TimelineData
