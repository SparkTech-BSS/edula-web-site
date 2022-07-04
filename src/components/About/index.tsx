import React, { useState } from 'react'

import CardCourseBox from '../CardCourseBox'

import { RiArrowRightUpLine } from 'react-icons/ri'

import { Wrapper } from '../../styles/global'

import { motion, AnimatePresence } from 'framer-motion'

import { NavigationTab, TabButton, TabContent, Tab } from '../../components/Tab'

import { getTabButtonColor } from '../../utils'

import {
  Container,
  WrappContainer,
  Division,
  TitleSection,
  TabItem,
  TabItemCol,
  TabHeading,
  TabText,
  TabButtonLink,
  ImgIllustration
} from './styles'

const About: React.FC = () => {
  const [activeTabId, setActiveTab] = useState(1)
  const NavigationTabData = [
    { id: 1, title: 'Avaliações', tag: 'evaluation', icon: 'Star.svg' },
    { id: 2, title: 'Certificados', tag: 'certification', icon: 'Checked.svg' },
    { id: 3, title: 'Conteúdos', tag: 'content', icon: 'Content.svg' }
  ]

  return (
    <Container id="about">
      <WrappContainer>
        <CardCourseBox />
      </WrappContainer>
      <Wrapper>
        <Division />

        <TitleSection>
          Veja quais são os <a>centros</a> mais bem avaliados e os <a>cursos</a>{' '}
          que mais ensinam
        </TitleSection>

        <NavigationTab>
          {NavigationTabData.map((item: any) => (
            <TabButton
              key={item.id}
              onClick={() => {
                setActiveTab(item.id)
              }}
              className={item.id === activeTabId ? 'active' : ''}
            >
              <img src={`/assets/SVG/${item.icon}`} alt="Icon" />
              {item.title}
            </TabButton>
          ))}
        </NavigationTab>

        <TabContent>
          <Tab
            eventKey="evaluation"
            isActive={
              NavigationTabData[activeTabId - 1].tag === 'evaluation'
                ? true
                : false
            }
          >
            <TabItem>
              <TabItemCol>
                <TabHeading>
                  Comece a ver o que as <br /> pessoas estão comentando <br />{' '}
                  sobre os cursos
                </TabHeading>

                <TabText>
                  Você vai encontrar as Avaliações Positivas e Negativas para
                  decidir qual Curso ou Centro você irá se Inscrever.
                </TabText>

                <TabButtonLink
                  typeButtonColor={getTabButtonColor('evaluation')}
                >
                  QUERO CONHECER <RiArrowRightUpLine size={20} color="#FFF" />
                </TabButtonLink>
              </TabItemCol>

              <TabItemCol>
                <ImgIllustration src="./assets/SVG/Iphone.svg" />
              </TabItemCol>
            </TabItem>
          </Tab>
          <Tab
            eventKey="certification"
            isActive={
              NavigationTabData[activeTabId - 1].tag === 'certification'
                ? true
                : false
            }
          >
            <TabItem>
              <TabItemCol>
                <TabHeading>
                  Emita seu certificado instantaneamente após <br /> terminar um
                  curso
                </TabHeading>

                <TabText>
                  Você poderá ver os orgãos que seu Curso Concede Certificação e
                  Validação antes mesmo da Inscrição.
                </TabText>

                <TabButtonLink
                  typeButtonColor={getTabButtonColor('certification')}
                >
                  SAIBA MAIS <RiArrowRightUpLine size={20} color="#FFF" />
                </TabButtonLink>
              </TabItemCol>

              <TabItemCol>
                <ImgIllustration src="./assets/SVG/PhoneGroup.svg" />
              </TabItemCol>
            </TabItem>
          </Tab>
          <Tab
            eventKey="content"
            isActive={
              NavigationTabData[activeTabId - 1].tag === 'content'
                ? true
                : false
            }
          >
            <TabItem>
              <TabItemCol>
                <TabHeading>
                  Descubra qual é o conteúdo <br /> que será passado antes{' '}
                  <br /> mesmo da inscrição
                </TabHeading>

                <TabText>
                  Você consegue ver toda Programação, Módulos, Materiais
                  oferecidos e tudo mais, antes mesmo de se inscrever naquele
                  curso profissionalizante que voce tanto quer.
                </TabText>

                <TabButtonLink typeButtonColor={getTabButtonColor('content')}>
                  CONHECER A EDULA <RiArrowRightUpLine size={20} color="#FFF" />
                </TabButtonLink>
              </TabItemCol>

              <TabItemCol>
                <ImgIllustration src="./assets/SVG/GirlStudent.svg" />
              </TabItemCol>
            </TabItem>
          </Tab>
        </TabContent>
      </Wrapper>
    </Container>
  )
}

export default About
