import React from "react";
import styled from "styled-components";
import { Button } from "./components/Button";
import { Label } from "./components/Label";
import { Text } from "./components/Text";
import { Table, TableHeader, TableRow, TableCell, TableFooter } from "./components/Table";
import { Dropdown } from "./components/Dropdown";
import { RadioButton } from "./components/RadioButton";
import { Img } from "./components/Img";
import { HeroImage } from "./components/HeroImage";
import { Card } from "./components/Card";

const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
`;

const Section = styled.section`
  margin: 40px 0;
`;

const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 40px;
`;

function App() {
  return (
    <Container>
      <Title>Benson Constance UI Garden</Title>

      <Section>
        <h2>Buttons</h2>
        <ComponentGrid>
          <Button text="Primary Button" />
          <Button text="Disabled Button" disabled={true} />
        </ComponentGrid>
      </Section>

      <Section>
        <h2>Labels</h2>
        <ComponentGrid>
          <Label text="Normal Label" />
          <Label text="Disabled Label" disabled={true} />
        </ComponentGrid>
      </Section>

      <Section>
        <h2>Text</h2>
        <ComponentGrid>
          <Text content="This is normal text" />
          <Text content="This is disabled text" disabled={true} />
        </ComponentGrid>
      </Section>

      <Section>
        <h2>Table</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell isHeader>Name</TableCell>
              <TableCell isHeader>Age</TableCell>
            </TableRow>
          </TableHeader>
          <tbody>
            <TableRow>
              <TableCell>John Doe</TableCell>
              <TableCell>30</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jane Smith</TableCell>
              <TableCell>25</TableCell>
            </TableRow>
          </tbody>
          <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>2 people</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Section>

      <Section>
        <h2>Dropdown</h2>
        <ComponentGrid>
          <Dropdown options={["Option 1", "Option 2", "Option 3"]} />
          <Dropdown options={["Option A", "Option B"]} disabled={true} />
        </ComponentGrid>
      </Section>

      <Section>
        <h2>Radio Buttons</h2>
        <ComponentGrid>
          <RadioButton label="Option 1" name="group1" />
          <RadioButton label="Disabled Option" disabled={true} />
        </ComponentGrid>
      </Section>

      <Section>
        <h2>Images</h2>
        <ComponentGrid>
          <Img src="https://via.placeholder.com/300x200" alt="Normal Image" width="300px" />
          <Img
            src="https://via.placeholder.com/300x200"
            alt="Disabled Image"
            disabled={true}
            width="300px"
          />
        </ComponentGrid>
      </Section>

      <Section>
        <h2>Hero Image</h2>
        <HeroImage
          src="https://via.placeholder.com/1200x400"
          alt="Hero Section"
          title="Welcome to UI Garden"
          subtitle="A beautiful component library"
        />
      </Section>

      <Section>
        <h2>Cards</h2>
        <ComponentGrid>
          <Card
            title="Sample Card"
            content="This is a sample card with some content to demonstrate the card component."
            imageUrl="https://via.placeholder.com/300x200"
          />
          <Card
            title="Disabled Card"
            content="This card is disabled and cannot be interacted with."
            imageUrl="https://via.placeholder.com/300x200"
            disabled={true}
          />
        </ComponentGrid>
      </Section>
    </Container>
  );
}

export default App;
