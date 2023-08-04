import { render, screen } from '@testing-library/react'
import GitHubCard from './GitHubCard'
import renderer from 'react-test-renderer'

test('check for card for GitHub', () => {
    const tree = renderer.create(<GitHubCard/>).toJSON()
  expect(tree).toMatchSnapshot()
})