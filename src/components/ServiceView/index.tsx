import React from 'react'

import { Wrapper } from '../../styles/global'

import { Container, CardService, Cards } from './styles'

const ServiceView: React.FC = () => {
  return (
    <Container id="services">
      <Wrapper>
        <h1>
          Por que escolher a <br /> plataforma da <span>Edula?</span>
        </h1>

        <Cards>
          <CardService>
            <img src="./assets/SVG/payment-icon.svg" alt="pagamento" />
            <h2>Pagamento rápido</h2>
            <p>
              Com apenas alguns cliques você se inscreve em qualquer curso e a
              sua matricula é feita automaticamente
            </p>
          </CardService>
          <CardService>
            <img src="./assets/SVG/oportunity-icon.svg" alt="oportunidade" />
            <h2>Oportunidades de trabalho</h2>
            <p>
              Seu CV e Linkedin ficará vinculado a conta da Edula para que
              empresas parceiras te contratem
            </p>
          </CardService>
          <CardService>
            <img src="./assets/SVG/school.svg" alt="ensino" />
            <h2>Varias opções de ensino</h2>
            <p>
              Com vários centros e cursos diferentes você pode escolher a melhor
              formação de acordo com o que você precisa
            </p>
          </CardService>
          <CardService>
            <img src="./assets/SVG/management-icon.svg" alt="gestão" />
            <h2>Gestão Academica</h2>
            <p>
              Centros preparados com tecnologia de ponta para auxiliar os alunos
              da melhor forma possivel
            </p>
          </CardService>
          <CardService>
            <img src="./assets/SVG/certificate-icon.svg" alt="certificado" />
            <h2>Emissão de Documentos</h2>
            <p>
              Tenha seu Certificado, Notas, Materiais, Pagamentos e atividades.
              Todas no seu controle
            </p>
          </CardService>
          <CardService>
            <img src="./assets/SVG/suporte-icon.svg" alt="suporte" />
            <h2>Suporte e auxilio</h2>
            <p>
              Tire todas as suas duvidas sobre a plataforma conosco e tire
              duvidas de materias de forma online com professores.
            </p>
          </CardService>
        </Cards>
      </Wrapper>
    </Container>
  )
}

export default ServiceView
