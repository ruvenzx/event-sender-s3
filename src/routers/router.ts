import { APIService } from "../services/service.types";
import { Router } from "express";
export class APIController {
   
    private router: Router;
    private service: APIService;

    constructor(router: Router, service: APIService) {
        this.router = router;
        this.service = service;
        this.initRoutes();
    }

    private initRoutes() {
        this.router.get("/", function (req, res) {
            res.send("Hello World!");
          });

          this.router.get("/getdata", this.service.getData.bind(this.service));
    }

}