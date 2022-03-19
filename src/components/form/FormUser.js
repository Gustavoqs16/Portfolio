import React, { useState } from "react";
<<<<<<< HEAD
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Col,
  Row,
} from "reactstrap";

const FormUser = () => {
  const [isOpened, setIsOpened] = useState(false);
=======
import { FloatingLabel, Form} from "react-bootstrap";
import {
  Button,
  FormGroup,
  Col,
  Row,
  Label,
} from "reactstrap";
import CardDescription from "../CardDescription/CardDescription";
import DragDrop from "../DragDrop/DragDrop";
import './styles.css';

const FormUser = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [file, setFile] = useState(null);

  const textTest = `A TiqueTaque é uma startup de gestão de ponto e jornada de trabalho. Fomos loucos e desenvolvemos um hardware IoT do zero que junto com nossa aplicação web e apps mobile formam uma solução definitiva e que ajuda a lidar com a ineficiência e a burocracia do gerenciamento de jornada de trabalho no Brasil. Se você quer participar da construção de uma startup, fazer história e trabalhar num ambiente de colaboração, inovação e altamente “hands on” onde cada um é importante e faz a diferença, seu lugar é aqui :).

  Estamos buscando um Tiquetaquer para integrar nosso time de Tecnologia.
  
  
  Você irá:
  
  Desenvolver nossas aplicações web garantindo boas práticas de código;
  Analisar e discutir requisitos funcionais e técnicos, propondo a melhor abordagem para desenvolvimento ou testes;
  Desenvolver código responsivo e fiel às interfaces projetadas;
  Propor soluções inovadoras e que permitam a evolução constante do produto;
  Trazer sua visão e experiência para a equipe de desenvolvimento;
  
  Você precisa:
  
  Possuir experiência de 2 anos ou mais com React.
  Prezar pelo desenvolvimento de código limpo, com foco em performance e manutenção;
  Buscar constante atualização quanto a tendências e técnicas para o desenvolvimento;
  Ter pró-atividade e capacidade de trabalhar em equipe;
  
  Você ganha estrelas se tiver:
  
  Conhecimentos de teste de interfaces;
  Graduação concluída em Ciência da Computação, Engenharia da Computação ou cursos similares;
  Paixão por tecnologia.
  
  Do lado de cá você ganha:
  
  Vale refeição ou alimentação (R$ 30,00 por dia);
  Plano de saúde;
  Day-off no aniversário;
  Um turno por mês de descanso extra à sua escolha;
  Trabalho remoto ou no escritório na medida que preferir;
  Ambiente leve e horários flexíveis;
  A chance de participar da construção de uma startup. Ou seja, aprendizado nível Hard e muito rápido!`;


  const handleChange = (file) => {
    setFile(file);
  };

>>>>>>> developer
  const handleSlctChange = () => {
    setIsOpened(!isOpened);
  }

  return (
<<<<<<< HEAD
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="name">Nome Completo</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Ex: Gustavo Queiróz de Souza "
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Ex: gustavo_teste@outlook.com"
              required
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <FormGroup>
          <Label for="slctIndicacao">Foi Indicado a vaga ?</Label>
          <Input type="select" name="select" id="slctIndicacao" onChange={handleSlctChange()} required>
            <option>Sim</option>
            <option>N&atilde;o</option>
          </Input>
          <small className="text-warning">
            Caso selecionado <b>sim</b>,inserir nome e cargo de quem ti indicou.
          </small>
        </FormGroup>
      </Row>
        { 
          !isOpened ?  
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="nameIndicator">Nome do Indicador</Label>
                    <Input
                      type="text"
                      name="nameIndicator"
                      id="nameIndicator"
                      placeholder="Ex: Fulado da Silva"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="cargoIndicator">Cargo</Label>
                    <Input
                      type="text"
                      name="cargoIndicator"
                      id="cargoIndicator"
                      placeholder="Ex: Vendedor"
                    />
                  </FormGroup>
                </Col>
              </Row>
          : null
        }
      <FormGroup>
        <Label for="curriculumFile">File</Label>
        <Input type="file" name="curriculumFile" id="curriculumFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Option one is this and that—be
            sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" /> Option two can be something
            else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled /> Option three is
            disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" /> Check me out
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
=======
    <div className="formUserContainer">
      <CardDescription title="Vaga de Emprego" subTitle="R$2.000 / CLT" text={textTest}/>
      <br />
      <hr />
      <br />
      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <FloatingLabel controlId="name" label="Nome Completo">
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ex: Gustavo Queiróz de Souza "
                  required
                />
              </FloatingLabel>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <FloatingLabel controlId="email" label="Email">
                <Form.Control
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ex: gustavo_teste@outlook.com"
                  required
                />
              </FloatingLabel>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <FormGroup>
            <FloatingLabel controlId="slctIndicacao" label="Foi Indicado a vaga ?">
              <Form.Select aria-label="Floating label select example" name="select" id="slctIndicacao" onChange={handleSlctChange} required>
                <option>Sim</option>
                <option>N&atilde;o</option>
              </Form.Select>
            </FloatingLabel>
            <small className="text-warning">
              Caso selecionado <b>sim</b>,inserir nome e cargo de quem ti indicou.
            </small>
          </FormGroup>
        </Row>
          { 
            !isOpened ?  
                <Row>
                  <Col md={6}>
                    <FormGroup>
                      <FloatingLabel controlId="nameIndicator" label="Nome do Indicador">
                        <Form.Control
                          type="text"
                          name="nameIndicator"
                          id="nameIndicator"
                          placeholder="Ex: Fulado da Silva"
                        />
                      </FloatingLabel>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup>
                      <FloatingLabel controlId="cargoIndicator" label="Cargo">
                        <Form.Control
                          type="text"
                          name="cargoIndicator"
                          id="cargoIndicator"
                          placeholder="Ex: Vendedor"
                        />
                      </FloatingLabel>
                    </FormGroup>
                  </Col>
                </Row>
            : null
          }
          <Row>
            <FormGroup>
              <Label label="" for="curriculumFile">Curriculo</Label>
              <DragDrop className="drop_zone" handleChange={handleChange} fileTypes={["JPG", "PNG", "GIF", " PDF"]}/>
            </FormGroup>
          </Row>
          <br />
        <Button color="primary">Enviar</Button>
      </Form>
    </div>
>>>>>>> developer
  );
};


export default FormUser;