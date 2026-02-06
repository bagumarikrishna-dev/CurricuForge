from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="CurricuForge API")

class CurriculumRequest(BaseModel):
    course_name: str
    duration: str
    level: str

@app.post("/generate-curriculum")
def generate_curriculum(data: CurriculumRequest):
    # Placeholder for AI integration (Gemini / IBM AI / Hugging Face)
    curriculum = {
        "course": data.course_name,
        "duration": data.duration,
        "level": data.level,
        "modules": [
            {
                "module": "Introduction",
                "topics": ["Basics", "Applications", "Industry Overview"],
                "learning_outcomes": [
                    "Understand fundamentals",
                    "Identify real-world use cases"
                ]
            },
            {
                "module": "Core Concepts",
                "topics": ["Concept 1", "Concept 2", "Concept 3"],
                "learning_outcomes": [
                    "Apply core concepts",
                    "Solve domain-specific problems"
                ]
            }
        ]
    }
    return curriculum
