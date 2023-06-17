<script>
	import Card from '$lib/components/experienceCard.svelte';
</script>

<h2>Experience</h2>
<div class="container">
	<Card
		timePeriod="Jan 2023 -  now"
		heading="Mechanical Design Engineer"
		companyName='Pragma Engineering'
		link='https://pragma-engineering.ch/'
		paragraph="Develop and Design Consumer Products with specialization in part design for injection moulding"
		tags={['SolidWorks', 'SolidWorks FEM', 'SolidEdge']}
	/>
</div>
<div class="container">
	<Card
		timePeriod="Dec 2021 - Dec 2022"
		heading="Field Application Engineer"
		companyName="Fotokite"
		link="https://fotokite.com/"
		paragraph="Provide technical support and aid in the establishment of support related processes"
		tags={['Git', 'SolidWorks', 'Wrike']}
	/>
</div>
<div class="container">
	<Card
		timePeriod="August 2019 - August 2020"
		heading="Internship"
		companyName='Burckhardt Compression'
		link='https://www.burckhardtcompression.com/'
		paragraph="Meintenance and creation of technical drawings. Create and maintain CAD material database. Aid in Compressor auxiliary components"
		tags={['NX', 'SAP', 'VBA']}
	/>
</div>

<style>
    h2{
        padding-bottom: 1rem;
    }
	.container {
		padding-bottom: 1rem;
	}
</style>
