import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'
import { AnswersRepository } from '../repositories/answers-repository'
import { Answer } from '../entities/answer'

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    console.log(answer)
  },
}

test('create a answer', async () => {
  const questionUseCase = new AnswerQuestionUseCase(fakeAnswersRepository)

  const answer = await questionUseCase.execute({
    instructorId: '1',
    questionId: '1',
    content: 'Response content',
  })

  expect(answer.content).toEqual('Response content')
})
