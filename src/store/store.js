import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk"
import rootReducer from "./reducers"
import { createLogger } from "redux-logger"

const loggerMiddleware = createLogger()
const middlewares = [thunkMiddleware]

if (process.env.NODE_ENV === "development") {
  middlewares.push(loggerMiddleware)
}
const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store