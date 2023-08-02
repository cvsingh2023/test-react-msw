// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers=[
    rest.post("/login" , ( res, req, ctx)=>{
        sessionStorage.setItem("is-authenticated",'true')
        return res(ctx.status(200))
    } )


    ,rest.get("/user",( req, res, ctx)=>{
		const isAuth = sessionStorage.getItem("is-authenticated")

		if( !isAuth ){
			return res(
				ctx.status(403),ctx.json({
					errorMsg :  "Not Authorized ",
				})
			)
		}

		//is Auth true
		return res(
			ctx.status(200),
			ctx.json({
				userName: 'admin'
			})
		)
	})
]