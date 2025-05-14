from fastapi import FastAPI
from .database import engine
from . import models
from .models import Base
from .routers import items, orders

app = FastAPI()

app.include_router(items.router)
app.include_router(orders.router)
#Create databse tables on startup
Base.metadata.create_all(bind=engine)

@app.get("/")
def read_root():
    return {"message": "Wok and Fire Backend - Working!"}