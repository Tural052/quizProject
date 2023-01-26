export interface IUser {
    ID: number;
    Name: string;
    Surname: string;
    Email: string;
    EegDate: Date;
    HasTested: boolean;
}
export interface ITest {
    ID: number;
    LessonName: string;
    QuestionCount: number;
    TestDifficulty: number;
    QuestionId: number;
    TestTimeLimit: number;
}
export interface ITakedTest {
    ID: number;
    TestId: number;
    UserId: number;
    TestDate: Date;
    TestScore: number;
}
export interface IQuestion {
    ID: number;
    CategoryId: number;
    QuestionTitle: string;
    QuestionDifficulty: number;
    AnswerA: string;
    AnswerB: string;
    AnswerC: string;
    AnswerD: string;
    AnswerE: string;
    CorrectAnswer: string;
}

export interface ICategory {
    ID: number;
    CategoryName: string;
}