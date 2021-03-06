import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const AppView = ({ app = {} }) => (
  <Container>
    <Link to="/apps">Back to All Friends</Link>
    <Header as="h3" textAlign="center">{app.name}</Header>
    <Image src={app.image} />
    <Table definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>{app.name}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Image</Table.Cell>
          <Table.Cell>{app.image}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Description</Table.Cell>
          <Table.Cell>{app.description}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

const mapStateToProps = (state, props) => {
  return { app: state.apps.find( a => a.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(AppView);
