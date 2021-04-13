import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Aluno } from '../models/Aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  public titulo = 'Alunos';
  public alunoSelecionado: Aluno;

  public alunos = [
    {id: 1, nome: 'Marta', sobrenome: 'Kent', telefone: 32546835},
    {id: 2, nome: 'Paula', sobrenome: 'Isabela', telefone: 36546545},
    {id: 3, nome: 'Laura', sobrenome: 'Antonia', telefone: 34825739},
    {id: 4, nome: 'Luiza', sobrenome: 'Maria', telefone: 35897542},
    {id: 5, nome: 'Lucas', sobrenome: 'Machado', telefone: 32548795},
    {id: 6, nome: 'Pedro', sobrenome: 'Alvares', telefone: 34876512},
    {id: 7, nome: 'Paulo', sobrenome: 'José', telefone: 38975426},
  ];
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) { 
    this.criarForm();
  }

  ngOnInit(){
  }

  criarForm(){
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  alunoSubmit(){
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno){
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }

  voltar(){
    this.alunoSelecionado = null;
  }

}
