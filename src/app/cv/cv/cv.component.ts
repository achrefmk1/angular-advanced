import { Component, inject } from "@angular/core";
import { Cv } from "../model/cv";
import { LoggerService } from "../../services/logger.service";
import { ToastrService } from "ngx-toastr";
import { CvService } from "../services/cv.service";
import { EMPTY, Observable, catchError, of, retry } from "rxjs";
import { TodoService } from "../../todo/service/todo.service";
@Component({
  selector: "app-cv",
  templateUrl: "./cv.component.html",
  styleUrls: ["./cv.component.css"],
})
export class CvComponent {
  cvs$: Observable<Cv[]> = this.cvService.getCvs().pipe(
    retry({
      count: 4,
      delay: 2000,
    }),
    catchError((e) => {
      this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
      return of(this.cvService.getFakeCvs());
    })
  );
  selectedCv$: Observable<Cv> = this.cvService.selectCv$;
  /*   selectedCv: Cv | null = null; */
  date = new Date();
  todoService = inject(TodoService);
  constructor(
    /*     private logger: LoggerService, */
    private toastr: ToastrService,
    private cvService: CvService
  ) {
    /* this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs = cvs;
      },
      error: () => {
        this.cvs = this.cvService.getFakeCvs();
        this.toastr.error(`
          Attention!! Les données sont fictives, problème avec le serveur.
          Veuillez contacter l'admin.`);
      },
    }); */
    /* this.logger.logger("je suis le cvComponent"); */
    this.toastr.info("Bienvenu dans notre CvTech");
  }
  /*   onForwardCv(cv: Cv) {
    this.selectedCv = cv;
    this.todoService.logTodos();
  } */
}
