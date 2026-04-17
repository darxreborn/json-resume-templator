import styled from 'styled-components';
import {
  Section,
  SectionTitle,
  ListItem,
  DateRange,
  BadgeList,
  safeUrl,
  getLinkRel,
} from '@jsonresume/core';


const LanguagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px 16px;
`;

const LanguageItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const LanguageName = styled.div`
  font-size: var(--resume-size-body, 11px);
  font-weight: 600;
`;

const LanguageFluency = styled.div`
  font-size: var(--resume-size-small, 10px);
  color: var(--resume-color-secondary, #475569);
`;

const LanguageLevel = styled.span`
  display: inline-block;
  font-size: 9px;
  font-weight: 700;
  color: var(--resume-color-accent, #0369a1);
  letter-spacing: 0.03em;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 20px;
`;

const ProjectCard = styled.div`
  padding: 8px 0;
`;

const ProjectTitle = styled.div`
  font-weight: 600;
  font-size: var(--resume-size-body, 11pt);
  color: var(--resume-color-primary, #000);
  margin-bottom: 2px;
`;

const ProjectDate = styled.div`
  font-size: 0.85em;
  color: var(--resume-color-tertiary, #666);
  margin-bottom: 2px;
`;

const ProjectDesc = styled.div`
  font-size: 0.9em;
  color: var(--resume-color-secondary, #333);
  line-height: 1.5;
`;

const PubCard = styled.div`
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 10px 12px;
  margin-bottom: 10px;
  border-left: 3px solid var(--resume-color-accent, #0369a1);
  background: #f0f9ff;
`;

const PubBadge = styled.div`
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--resume-color-accent, #0066cc);
  white-space: nowrap;
  padding-top: 2px;
`;

const PubBody = styled.div`
  flex: 1;
`;

const PubTitle = styled.div`
  font-weight: 700;
  font-size: var(--resume-size-body, 11pt);
  color: var(--resume-color-primary, #000);
  margin-bottom: 2px;
`;

const PubMeta = styled.div`
  font-size: 0.85em;
  color: var(--resume-color-secondary, #555);
  margin-bottom: 4px;
`;

const PubSummary = styled.div`
  font-size: 0.9em;
  color: var(--resume-color-secondary, #333);
  line-height: 1.5;
`;

const FLUENCY_CEFR = {
  native: 'Native',
  bilingual: 'Native',
  'full professional': 'C1',
  'professional working': 'B2',
  intermediate: 'B1',
  'limited working': 'A2',
  elementary: 'A2',
  beginner: 'A1',
};

function fluencyToCEFR(fluency = '') {
  return FLUENCY_CEFR[fluency.toLowerCase()] ?? null;
}

/**
 * Resume Component
 * THE PERFECT SHOWCASE of @resume/core and resume design best practices
 *
 * This demonstrates:
 * - All 5 @resume/core primitives with JSX
 * - All 11 JSON Resume schema sections
 * - ATS-friendly patterns
 * - Design token usage
 * - Beautiful component composition
 */

const Layout = styled.div`
  max-width: var(--resume-max-width, 660px);
  margin: 0 auto;
  padding: 40px 20px;
  font-family: var(
    --resume-font-sans,
    'Helvetica Neue',
    Helvetica,
    Arial,
    sans-serif
  );
  font-size: var(--resume-size-body, 11px);
  line-height: 1.5;
  color: var(--resume-color-primary, #0f172a);

  .resume-section-title {
    font-size: var(--resume-size-heading, 13px);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
  }

  .resume-item-title {
    font-size: var(--resume-size-body, 11px);
  }

  .resume-item-subtitle {
    font-size: 0.9em;
  }

  .resume-item-meta {
    font-size: var(--resume-size-small, 10px);
  }

  .resume-highlights li {
    font-size: var(--resume-size-small, 10px);
  }

  a {
    color: var(--resume-color-accent, #0369a1);
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: var(--resume-space-section, 2rem);
`;

const Name = styled.h1`
  font-size: var(--resume-size-name, 28px);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 6px 0;
  color: var(--resume-color-primary, #0f172a);
`;

const Label = styled.p`
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--resume-color-secondary, #475569);
  margin: 0 0 12px 0;
`;

const Contact = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  font-size: var(--resume-size-small, 10px);
  color: var(--resume-color-secondary, #475569);
`;

const Summary = styled.p`
  text-align: center;
  margin: 8px 0;
  font-size: 0.9em;
  color: var(--resume-color-secondary, #333);
`;

const SkillGroup = styled.div`
  margin-bottom: 12px;

  strong {
    margin-right: 8px;
  }
`;

function Resume({ resume }) {
  const {
    basics = {},
    work = [],
    education = [],
    skills = [],
    volunteer = [],
    awards = [],
    publications = [],
    languages = [],
    interests = [],
    references = [],
    projects = [],
  } = resume;

  return (
    <Layout>
      {/* Hero Section - Name, Title, Contact */}
      {basics && (
        <Header>
          <Name>{basics.name}</Name>
          {basics.label && <Label>{basics.label}</Label>}

          <Contact>
            {basics.email && (
              <a href={safeUrl(`mailto:${basics.email}`)}>{basics.email}</a>
            )}
            {basics.phone && <span>{basics.phone}</span>}
            {basics.url && (
              <a
                href={safeUrl(basics.url)}
                target="_blank"
                rel={getLinkRel(basics.url, true)}
              >
                {basics.url}
              </a>
            )}
            {basics.location && (
              <span>
                {[
                  basics.location.city,
                  basics.location.region,
                  basics.location.countryCode,
                ]
                  .filter(Boolean)
                  .join(', ')}
              </span>
            )}
            {basics.profiles?.map((profile) => {
              const profileUrl = safeUrl(profile.url);
              return (
                profileUrl && (
                  <a
                    key={profile.network}
                    href={profileUrl}
                    target="_blank"
                    rel={getLinkRel(profileUrl, true)}
                  >
                    {profile.network}
                  </a>
                )
              );
            })}
          </Contact>

          {basics.summary && <Summary>{basics.summary}</Summary>}
        </Header>
      )}

      {/* Work Experience Section */}
      {work.length > 0 && (
        <Section id="work">
          <SectionTitle>Work Experience</SectionTitle>
          {work.map((job, index) => (
            <ListItem
              key={index}
              title={job.position}
              subtitle={job.name}
              dateRange={
                job.startDate ? (
                  <DateRange startDate={job.startDate} endDate={job.endDate} />
                ) : null
              }
              location={job.location}
              description={job.summary}
              highlights={job.highlights}
            />
          ))}
        </Section>
      )}

      {/* Education Section */}
      {education.length > 0 && (
        <Section id="education">
          <SectionTitle>Education</SectionTitle>
          {education.map((edu, index) => {
            const title = [edu.studyType, edu.area]
              .filter(Boolean)
              .join(' in ');
            const highlights = [
              edu.score ? `GPA: ${edu.score}` : '',
              ...(edu.courses || []),
            ].filter(Boolean);

            return (
              <ListItem
                key={index}
                title={title || edu.institution}
                subtitle={title ? edu.institution : ''}
                dateRange={
                  edu.startDate ? (
                    <DateRange
                      startDate={edu.startDate}
                      endDate={edu.endDate}
                    />
                  ) : null
                }
                highlights={highlights.length > 0 ? highlights : undefined}
              />
            );
          })}
        </Section>
      )}

      {/* Skills Section */}
      {skills.length > 0 && (
        <Section id="skills">
          <SectionTitle>Skills</SectionTitle>
          {skills.map((skillGroup, index) => (
            <SkillGroup key={index}>
              {skillGroup.name && <strong>{skillGroup.name}:</strong>}
              <BadgeList items={skillGroup.keywords} variant="default" />
            </SkillGroup>
          ))}
        </Section>
      )}

      {/* Publications Section */}
      {publications.length > 0 && (
        <Section id="publications">
          <SectionTitle>Publications</SectionTitle>
          {publications.map((pub, index) => (
            <PubCard key={index}>
              <PubBadge>Published</PubBadge>
              <PubBody>
                <PubTitle>
                  {pub.url && safeUrl(pub.url) ? (
                    <a
                      href={safeUrl(pub.url)}
                      target="_blank"
                      rel={getLinkRel(pub.url, true)}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {pub.name}
                    </a>
                  ) : (
                    pub.name
                  )}
                </PubTitle>
                <PubMeta>
                  {[pub.publisher, pub.releaseDate].filter(Boolean).join(' · ')}
                </PubMeta>
                {pub.summary && <PubSummary>{pub.summary}</PubSummary>}
              </PubBody>
            </PubCard>
          ))}
        </Section>
      )}

      {/* Projects Section */}
      {projects.length > 0 && (
        <Section id="projects">
          <SectionTitle>Projects</SectionTitle>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard key={index}>
                <ProjectTitle>
                  {project.url && safeUrl(project.url) ? (
                    <a
                      href={safeUrl(project.url)}
                      target="_blank"
                      rel={getLinkRel(project.url, true)}
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </ProjectTitle>
                {project.startDate && (
                  <ProjectDate>
                    <DateRange startDate={project.startDate} endDate={project.endDate} />
                  </ProjectDate>
                )}
                {project.description && (
                  <ProjectDesc>{project.description}</ProjectDesc>
                )}
                {project.keywords && project.keywords.length > 0 && (
                  <BadgeList items={project.keywords} variant="accent" />
                )}
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </Section>
      )}

      {/* Volunteer Section */}
      {volunteer.length > 0 && (
        <Section id="volunteer">
          <SectionTitle>Volunteer Experience</SectionTitle>
          {volunteer.map((vol, index) => (
            <ListItem
              key={index}
              title={vol.position}
              subtitle={vol.organization}
              dateRange={
                vol.startDate ? (
                  <DateRange startDate={vol.startDate} endDate={vol.endDate} />
                ) : null
              }
              description={vol.summary}
              highlights={vol.highlights}
            />
          ))}
        </Section>
      )}

      {/* Awards Section */}
      {awards.length > 0 && (
        <Section id="awards">
          <SectionTitle>Awards & Honors</SectionTitle>
          {awards.map((award, index) => (
            <ListItem
              key={index}
              title={award.title}
              subtitle={award.awarder}
              dateRange={award.date}
              description={award.summary}
            />
          ))}
        </Section>
      )}

      {/* Languages Section */}
      {languages.length > 0 && (
        <Section id="languages">
          <SectionTitle>Languages</SectionTitle>
          <LanguagesGrid>
            {languages.map((lang, index) => {
              const cefr = fluencyToCEFR(lang.fluency);
              return (
                <LanguageItem key={index}>
                  <LanguageName>{lang.language}</LanguageName>
                  {lang.fluency && (
                    <LanguageFluency>
                      {lang.fluency}
                      {cefr && cefr.toLowerCase() !== lang.fluency.toLowerCase() && <LanguageLevel> · {cefr}</LanguageLevel>}
                    </LanguageFluency>
                  )}
                </LanguageItem>
              );
            })}
          </LanguagesGrid>
        </Section>
      )}

      {/* Interests Section */}
      {interests.length > 0 && (
        <Section id="interests">
          <SectionTitle>Interests</SectionTitle>
          <BadgeList
            items={interests.flatMap((i) => i.keywords || [])}
            variant="default"
          />
        </Section>
      )}

      {/* References Section */}
      {references.length > 0 && (
        <Section id="references">
          <SectionTitle>References</SectionTitle>
          {references.map((ref, index) => (
            <ListItem
              key={index}
              title={ref.name}
              description={ref.reference}
            />
          ))}
        </Section>
      )}
    </Layout>
  );
}

export default Resume;
