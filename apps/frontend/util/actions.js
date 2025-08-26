"use server"

import { API_URI } from "./constants"

/**
 * @returns {Promise<any[]>}
 */
export const getSessions = async () => {
  const sessions = await fetch(`${API_URI}/sessions`).then((res) => res.json());
  return sessions;
}

/**
 * @param {string} id
 * @returns {Promise<any>}
 */
export const getSessionById = async (id) => {
  const session = await fetch(`${API_URI}/sessions/${id}`)
    .then((res) => res.json());

  return session;
}

/**
 * @param {any} session
 * @returns {Promise<any>}
 */
export const createSession = async (session) => {
  const session = await fetch(
    `${API_URI}/sessions`,
    { method: "POST", body: session }
  ).then((res) => res.json());

  return session;
}

/**
 * 
 * @param {any} session 
 * @returns {Promise<any>}
 */
export const updateSession = async (session) => {
  const session = await fetch(
    `${API_URI}/sessions`,
    { method: "PATCH", body: session }
  ).then((res) => res.json());

  return session;
}

/**
 * @param {string} sessionId
 * @returns {Promise<any>}
 */
export const getGamesBySessionId = async (sessionId) => {
  const games = await fetch(`${API_URI}/games?sessionId=${sessionId}`)
    .then((res) => res.json());

  return games;
}

/**
 * @param {any} game
 * @returns {Promise<any>}
 */
export const createGame = async (game) => {
  const game = await fetch(
    `${API_URI}/games`,
    { method: "POST", body: game }
  ).then((res) => res.json());

  return game;
}

/**
 * @param {any} game
 * @returns {Promise<any>}
 */
export const updateGame = async (game) => {
  const game = await fetch(
    `${API_URI}/games`,
    { method: "PATCH", body: game }
  ).then((res) => res.json());

  return game;
}

/**
 * @param {any} user 
 * @returns {Promise<any>} 
 */
export const createUser = async (user) => {
  const user = await fetch(
    `${API_URI}/users`,
    { method: "POST", body: user }
  ).then((res) => res.json());

  return user;
}

/**
 * @returns {Promise<any>}
 */
export const getUsers = async () => {
  const users = await fetch(`${API_URI}/users`).then((res) => res.json());

  return users;
}