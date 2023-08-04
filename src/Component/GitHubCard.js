import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="http://placekitten.com/g/200/300" />
      <Card.Body>
        <Card.Title>My Gitgub:leecodexxe</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go to My Github</Button>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;