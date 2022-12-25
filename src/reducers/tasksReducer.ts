import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const tasksReducer = (state: TaskType[], action: TsarType) => {
    switch (action.type) {
        case "REMOVE-TASK": {
            return state.filter(el => el.id !== action.payload.id)
        }
        case "ADD-TASK": {
            let newTask = {id: v1(), title: action.payload.title, isDone: false};
            // let newTasks = [newTask, ...tasks];
            // setTasks(newTasks);
            return [...state, newTask]
        }
        default:
            return state
    }
}

type TsarType = RemoveTaskACType | AddTaskACType

export type RemoveTaskACType = ReturnType<typeof removeTaskAC>
export type AddTaskACType = ReturnType<typeof addTaskAC>

export const removeTaskAC = (id: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {
            id
        }
    } as const
}
export const addTaskAC = (title: string) => {
    return {
        type: 'ADD-TASK',
        payload: {
            title
        }
    } as const
}