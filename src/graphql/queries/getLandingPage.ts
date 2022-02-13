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

fragment aboutProject on LandingPage {
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

fragment sectionTech on LandingPage {
  sectionTech {
    title
    techIcons {
      title
      image {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }
    }
  }
}

fragment sectionConcepts on LandingPage {
  sectionConcepts {
    title
    concepts {
      id
      title
    }
  }
}

fragment sectionModules on LandingPage {
  sectionModules {
    title
    modules {
      id
      title
      subtitle
      description
    }
  }
}

query GET_LANDING_PAGE {
  landingPage {
    data {
      attributes {
        ...logo
        ...header
        ...aboutProject
        ...sectionTech
        ...sectionConcepts
        ...sectionModules
      }
    }
  }
}
`