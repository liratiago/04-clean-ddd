import { Answer } from "../entities/answer"
import { AnswersRepository } from "../repositories/answers-repository"

interface AnswerQuestionUseCaseRequest{
    content: string
    instructorId: string
    questionId: string
}

export class AnswerQuestionUseCase{

    constructor(
        private answersRepository: AnswersRepository
    ) {}
    
    async execute({ content, instructorId, questionId  }: AnswerQuestionUseCaseRequest ) {
        const answer = new Answer(
            { 
                content,
                authorId: instructorId,
                questionId,
            } 
        )  

        await this.answersRepository.create(answer)

        return answer
    }
}