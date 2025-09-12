import { Component } from '@angular/core';
import { EmpleadoService } from '../../Service/empleado-service';
import { EmpleadosInterface } from '../../interfaces/empleados-interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-quejas',
  imports: [
    CommonModule, 
    FormsModule, 
    MatIconModule, 
    MatCardModule, 
    MatInputModule, 
    MatButtonModule, 
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './quejas.html',
  styleUrl: './quejas.css'
})
export class Quejas {
empleados: EmpleadosInterface[] = [];
cargando: boolean = true;

mostrarFormulario: boolean = false
modoEdicion: boolean = false;
nuevoEmpleado: EmpleadosInterface = { id: 0, nombre: '', puesto: '', edad: 0, salario: 0 };

constructor(private empleadoService: EmpleadoService) { }
//validaciones formulario
private fb: FormBuilder = new FormBuilder();
form: FormGroup = this.fb.group({});
// carga inicial de empleados
ngOnInit() : void{
  this.empleadoService.getEmpleados().subscribe({
    next: (data) => {
      this.empleados = data;
      this.cargando = false;
      console.log('Empleados cargados:', this.empleados);
    },
    error: (error) => {
      console.error('Error al cargar empleados', error);
      this.cargando = false;
    }
  });
  // Inicializar el formulario con validaciones
  this.form = this.fb.group({
    nombre: ['', Validators.required],
    puesto: ['', Validators.required],
    edad: [null, [Validators.required, Validators.min(1)]],
    salario: [null, [Validators.required, Validators.min(0.01)]]
  });
}
toggleFormulario() {
  this.mostrarFormulario = !this.mostrarFormulario;
  if (!this.mostrarFormulario) {
    this.resetFormulario();
  }
}

agregarNuevoEmpleado(): void {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  const nuevo: EmpleadosInterface  = this.form.value;
  this.empleadoService.agregarEMpleado(nuevo).subscribe({
    next: (empleado) => {
      this.empleados.push(empleado);
      this.resetFormulario();
      this.mostrarFormulario = false;
    },
    error: (error) => {
      console.error('Error al agregar empleado', error);
    }
  });
};
 
editarEmpleado(emp: EmpleadosInterface) {
  this.nuevoEmpleado = { ...emp }; //guarda el id del empleado a editar
  this.form.patchValue({// Rellena el formulario con los datos del empleado
  nombre: emp.nombre,
  puesto: emp.puesto,
  edad: emp.edad,
  salario: emp.salario
});
  this.modoEdicion = true;
  this.mostrarFormulario = true;
}

guardarEdicion(): void {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  const actualizado: EmpleadosInterface = {
    id: this.nuevoEmpleado.id,
    ...this.form.value
  };

  this.empleadoService.actualizarEmpleado(actualizado.id, actualizado).subscribe({
    next: () => {
      // Volver a cargar la lista de empleados desde la API
      this.empleadoService.getEmpleados().subscribe({
        next: (empleadosActualizados) => {
          this.empleados = empleadosActualizados;
          this.resetFormulario();
          this.mostrarFormulario = false;
        },
        error: (err) => console.error('Error al recargar empleados', err)
      });
    },
    error: err => console.error('Error al editar empleado', err)
  });
}

eliminarEmpleado(id: number) {
  if (confirm('¿Estás seguro que deseas eliminar este empleado?')) {
    this.empleadoService.eliminarEmpleado(id).subscribe({
      next: () => {
        this.empleados = this.empleados.filter(e => e.id !== id);
      },
      error: (err) => console.error('Error al eliminar empleado', err)
    });
  }
}
resetFormulario(): void {
  this.form.reset();
  this.nuevoEmpleado = { id: 0, nombre: '', puesto: '', edad: 0, salario: 0 };
  this.mostrarFormulario = false;
  this.modoEdicion = false;
}
}
