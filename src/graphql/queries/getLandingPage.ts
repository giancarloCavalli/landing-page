import { gql } from "graphql-request";

export const GET_LANDING_PAGE = gql`
fragment logo on LandingPage {
  logo {
    data {
      attributes {
        alternativeText
        url
      }
    }
  }
}

fragment header on LandingPage {
  header {
    title
    description
    button {
      label
      url
    }
    media {
      data {
        attributes {
          alternativeText
          url
        }
      }
    }
  }
}

fragment sectionAboutProject on LandingPage {
	sectionAboutProject {
    title
    description
    media {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
  }
}

query GET_LANDING_PAGE {
  landingPage {
    data {
      attributes {
        ...logo
        ...header
        ...sectionAboutProject
      }
    }
  }
}
`