// ViewFXAA.js

import alfrid, { GL } from 'alfrid';
import fs from '../shaders/fxaa.frag';

class ViewFXAA extends alfrid.View {
	
	constructor(mesh) {
		super(alfrid.ShaderLibs.bigTriangleVert, fs);

		this.mesh = mesh;
	}


	_init() {
		this.shader.bind();
		this.shader.uniform("texture", "uniform1i", 0);
	}


	render(texture) {
		this.shader.bind();
		texture.bind(0);
		this.shader.uniform("rtWidth", "float", GL.width);
		this.shader.uniform("rtHeight", "float", GL.height);
		GL.draw(this.mesh);
	}


}

export default ViewFXAA;