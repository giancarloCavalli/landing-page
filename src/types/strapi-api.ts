export type LogoProps = {
  data: {
    attributes: {
      alternativeText: string
      url: string
    }
  }
}

export type ButtonProps = {
  label: string
  url: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  media: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  media: {
    data: {
      attributes: {
        url: string
        alternativeText: string
      }
    }
  }
}

export type TechProps = {
  title: string,
  image: {
    data: {
      attributes: {
        url: string
        alternativeText: string
      }
    }
  }
}

export type SectionTechProps = {
  title: string
  techIcons: TechProps[]
}

export type ConceptProps = {
  id: number,
  title: string
}

export type SectionConceptsProps = {
  title: string
  concepts: ConceptProps[]
}

export type ModulesProps = {
  id: number
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: ModulesProps[]
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
}