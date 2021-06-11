enum Tag {
  WORK = `work`,
  EDUCATION = `education`,
  HACKATHON = `hackathon`,
}
enum Colour {
  workColour = `#736CED`,
  educationColour = `#018f69`,
}

const dateBuilder = (shortDate: string): string => {
  const shortDateParts = shortDate.split(`/`)
  const date = new Date(+shortDateParts[2], shortDateParts[1] - 1, +shortDateParts[0])
  return new Intl.DateTimeFormat(`en-GB`, { day: `numeric`, month: `long`, year: `numeric` }).format(date).toString()
}

export const TimelineData = [
  {
    text: `Start at my first job which was at Mcdonald's`,
    date: dateBuilder(`30/08/2009`),
    category: {
      tag: Tag.WORK,
      color: Colour.workColour,
    },
  },
  {
    text: `Left High School`,
    date: dateBuilder(`27/08/2009`),
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Started college at The Manchester Collage and did a BTEC First in IT Level 2 Course`,
    date: dateBuilder(`02/09/2009`),
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Completed Level 2 in IT Course`,
    date: dateBuilder(`10/06/2010`),
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Stayed at The Manchester Collage and did a BTEC Level 3 in National Dip in IT (Software Development) & Resit English & Maths GCSE`,
    date: dateBuilder(`06/09/2010`),
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Completed BTEC Level 3 in National Dip in IT (Software Development) Course`,
    date: dateBuilder(`10/06/2010`),
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Promoted to a Crew trainer at McDonald's`,
    date: dateBuilder(`10/07/2012`),
    category: {
      tag: Tag.WORK,
      color: Colour.workColour,
    },
  },
  {
    text: `Stayed at The Manchester Collage and did a Foundation degree Within Computing with Database Development Accredited by Salford University`,
    date: dateBuilder(`20/09/2012`),
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Started Working at Maplin`,
    date: dateBuilder(`14/04/2014`),
    category: {
      tag: Tag.WORK,
      color: Colour.workColour,
    },
  },
  {
    text: `Left Mcdonald's`,
    date: dateBuilder(`30/08/2014`),
    category: {
      tag: Tag.WORK,
      color: Colour.workColour,
    },
  },
  {
    text: `Left Maplin`,
    date: dateBuilder(`30/06/2015`),
    category: {
      tag: Tag.WORK,
      color: Colour.workColour,
    },
  },
  {
    text: `Completed Foundation degree Within Computing with Database Development Accredited by Salford University`,
    date: dateBuilder(`02/07/2014`),
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Started at The Manchester Metroplitan University and did a BSc (Hons), Software Engineering with Sandwich Year `,
    date: dateBuilder(`20/09/2014`),
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Completed BSc (Hons) Software Engineering with Sandwich Year `,
    date: dateBuilder(`10/05/2017`),
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Started at The Manchester University and did a Postgraduate Diploma, Advanced Computer Science within Software Engineering `,
    date: dateBuilder(`20/09/2017`),
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Completed Postgraduate Diploma, Advanced Computer Science within Software Engineering `,
    date: dateBuilder(`10/08/2018`),
    category: {
      tag: Tag.EDUCATION,
      color: Colour.educationColour,
    },
  },
  {
    text: `Left Team Netsol`,
    date: dateBuilder(`20/08/2018`),
    category: {
      tag: Tag.WORK,
      color: Colour.workColour,
    },
  },
  {
    text: `Started Working at Team Netsol as a Inter Junior Software Engineer`,
    date: dateBuilder(`01/07/2015`),
    category: {
      tag: Tag.WORK,
      color: Colour.workColour,
    },
  },
  {
    text: `Promoted from Inter Junior Software Engineer to Junior Software Engineer at Team Netsol`,
    date: dateBuilder(`01/07/2015`),
    category: {
      tag: Tag.WORK,
      color: Colour.workColour,
    },
  },
  {
    text: `Started Working at Booking.com as a Graduate Software Engineer`,
    date: dateBuilder(`09/09/2018`),
    category: {
      tag: Tag.WORK,
      color: Colour.workColour,
    },
  },
  {
    text: `Promoted from Graduate Software Engineer to Software Engineer at Booking.com`,
    date: dateBuilder(`01/10/2020`),
    category: {
      tag: Tag.WORK,
      color: Colour.workColour,
    },
  },
]

export default TimelineData
