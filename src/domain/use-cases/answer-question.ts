import { UniqueEntityID } from "../../core/entities/unique-id-entity"
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
        const answer = Answer.create(
            { 
                content,
                authorId: new UniqueEntityID( instructorId ),
                questionId: new UniqueEntityID ( questionId ),
            } 
        )  

        await this.answersRepository.create(answer)

        return answer
    }
}